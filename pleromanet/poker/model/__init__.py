from collections import namedtuple, Mapping
from itertools import combinations, groupby
import random

game_attributes = ['id', 'name', 'state', 'big_blind', 'small_blind', 'players', 'num_seats', 'pot', 'deck']
Game = namedtuple('Game', game_attributes)

state_attributes = ['name', 'value']
GameState = namedtuple('GameState', state_attributes)

player_attributes = ['id', 'name', 'hand', 'bet', 'position']
Player = namedtuple('Player', player_attributes)

rank_attributes = ['name', 'value']
Rank = namedtuple('Rank', rank_attributes)

card_attributes = ['rank', 'suit']
Card = namedtuple('Card', card_attributes)

game_states =\
    [GameState(k, v) for v, k in enumerate
     ('WAITING_TO_START PREFLOP FLOP TURN RIVER'.split())]

ranks =\
    [Rank(k, v) for v, k in enumerate
     ('two three four five six seven eight nine ten jack queen king ace'
      .split())]

suits =\
    ("clubs diamonds hearts spades"
     .split())

deck =\
    [Card(r, s) for r in ranks for s in suits]

card_of =\
    (lambda name, suit:
     next(x for x in deck if x.rank.name == name and x.suit == suit))

hand_values =\
    (lambda hand:
     [card.rank.value for card in hand])

def n_of_a_kind(n, hand):
    hv = hand_values(hand)
    return any(hv.count(v) == n for v in hv)

def high_card_value(hand_values):
    return max(hand_values)

def low_card_value(hand_values):
    return min(hand_values)

def one_pair(hand):
    return n_of_a_kind(2, hand)

def two_pair(hand):
    return len([p for p in combinations(hand, 2) if one_pair(p)]) == 2

def three_of_a_kind(hand):
    return n_of_a_kind(3, hand)

def straight(hand):
    hand_vals = hand_values(hand).sort()
    val_range = list(range(low_card_value(hand_vals),
                           high_card_value(hand_vals) + 1))
    return val_range == hand_vals and len(val_range) == 5

def flush(hand):
    return all(c.suit == hand[0].suit for c in hand)

def full_house(hand):
    return three_of_a_kind(hand) and one_pair(hand)

def four_of_a_kind(hand):
    return n_of_a_kind(4, hand)

def straight_flush(hand):
    return straight(hand) and flush(hand)

def royal_flush(hand):
    return straight_flush and high_card_value(hand) == ranks[-1].value

def highest_value_score(hand):
    return high_card_value(hand_values(hand))

def highest_paired_score(hand, base_score):
    g = dict(groupby(hand, lambda x: x.rank.value))
    return g

def state_to_dict(state):
    return state._asdict()

def state_from_dict(state_dict):
    assert isinstance(state_dict, Mapping)
    state_values = []
    for k in state_attributes:
        if k not in state_dict:
            raise Exception(f"state is missing required attribute \"{k}\"")
        else:
            state_values.append(state_dict[k])
    return GameState(*tuple(state_values))


def rank_to_dict(rank):
    return rank._asdict()

def rank_from_dict(rank_dict):
    assert isinstance(rank_dict, Mapping)
    rank_values = []
    for k in rank_attributes:
        if k not in rank_dict:
            raise Exception(f"rank is missing required attribute \"{k}\"")
        else:
            rank_values.append(rank_dict[k])
    return Rank(*tuple(rank_values))

def card_to_dict(card):
    card_dict = {}
    for k in card_attributes:
        value = getattr(card, k)
        if k == 'rank':
            card_dict[k] = rank_to_dict(value)
        else:
            card_dict[k] = value
    return card_dict

def card_from_dict(card_dict):
    assert isinstance(card_dict, Mapping)
    card_values = []
    for k in card_attributes:
        if k not in card_dict:
            raise Exception(f"card is missing required attribute \"{k}\"")
        if k == 'rank':
            card_values.append(rank_from_dict(card_dict[k]))
        else:
            card_values.append(card_dict[k])
    return Card(*tuple(card_values))

def player_to_dict(player):
    player_dict = {}
    for k in player_attributes:
        value = getattr(player, k)
        if k == 'hand':
            player_dict[k] = [card_to_dict(c) for c in value]
        else:
            player_dict[k] = value
    return player_dict

def player_from_dict(player_dict):
    assert isinstance(player_dict, Mapping)
    player_values = []
    for k in player_attributes:
        if k not in player_dict:
            raise Exception(f"player is missing required attribute \"{k}\"")
        elif k == 'hand':
            player_values.append([card_from_dict(c) for c in player_dict[k]])
        else:
            player_values.append(player_dict[k])
    return Player(*tuple(player_values))

def game_to_dict(game):
    game_dict = {}
    for k in game_attributes:
        value = getattr(game, k)
        if k == 'players':
            game_dict[k] = [player_to_dict(p) for p in value]
        elif k == 'deck':
            game_dict[k] = [card_to_dict(c) for c in value]
        elif k == 'state':
            game_dict[k] = state_to_dict(value)
        else:
            game_dict[k] = value
    return game_dict

def game_from_dict(game_dict):
    assert isinstance(game_dict, Mapping)
    game_values = []
    for k in game_attributes:
        if k not in game_dict:
            raise Exception(f"game is missing required attribute \"{k}\"")
        elif k == 'players':
            game_values.append([player_from_dict(p) for p in game_dict[k]])
        elif k == 'deck':
            game_values.append([card_from_dict(c) for c in game_dict[k]])
        elif k == 'state':
            game_values.append(state_from_dict(game_dict[k]))
        else:
            game_values.append(game_dict[k])
    return Game(*tuple(game_values))

def get_shuffled_deck():
    deck_dict = [card_to_dict(c) for c in deck]
    random.shuffle(deck_dict)
    return deck_dict
