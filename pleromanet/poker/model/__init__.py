from typing import NamedTuple, Tuple, List
from itertools import combinations, groupby
import random

class Rank(NamedTuple):
    name: str
    value: str

class Card(NamedTuple):
    rank: Rank
    suit: str

class Player(NamedTuple):
    id: str
    name: str
    stack: int
    hand: Tuple[Card]
    bet: int
    position: int
    sitting_out: bool
    has_folded: bool
    seat_num: int
    is_players_turn: bool

class GameState(NamedTuple):
    name: str
    value: int

class Game(NamedTuple):
    id: str
    name: str
    state: GameState
    big_blind: int
    small_blind: int
    players: Tuple[Player]
    num_seats: int
    pot: int
    deck: Tuple[Card]

game_states =\
    [GameState(k, v) for v, k in enumerate
     ('WAITING_TO_START PRE-FLOP FLOP TURN RIVER'.split())]



ranks =\
    [Rank(k, v) for v, k in enumerate
     ('two three four five six seven eight nine ten jack queen king ace'
      .split())]

suits =\
    ("clubs diamonds hearts spades"
     .split())

deck =\
    [Card(r, s) for r in ranks for s in suits]

def card_of(name: str, suit: str) -> Card:
    next(x for x in deck
         if x.rank.name == name and x.suit == suit)

def hand_values(hand: Tuple[Card]) -> Tuple[int]:
    return [card.rank.value for card in hand]

def n_of_a_kind(n: int, hand: Tuple[Card]) -> int:
    hv = hand_values(hand)
    return any(hv.count(v) == n for v in hv)

def high_card_value(hand_values: Tuple[int]) -> int:
    return max(hand_values)

def low_card_value(hand_values: Tuple[int]) -> int:
    return min(hand_values)

def one_pair(hand: Tuple[Card]) -> bool:
    return n_of_a_kind(2, hand)

def two_pair(hand: Tuple[Card]) -> bool:
    return len([p for p in combinations(hand, 2) if one_pair(p)]) == 2

def three_of_a_kind(hand: Tuple[Card]) -> bool:
    return n_of_a_kind(3, hand)

def straight(hand: Tuple[Card]) -> bool:
    hand_vals = hand_values(hand).sort()
    val_range = list(range(low_card_value(hand_vals),
                           high_card_value(hand_vals) + 1))
    return val_range == hand_vals and len(val_range) == 5

def flush(hand: Tuple[Card]) -> bool:
    return all(c.suit == hand[0].suit for c in hand)

def full_house(hand: Tuple[Card]) -> bool:
    return three_of_a_kind(hand) and one_pair(hand)

def four_of_a_kind(hand: Tuple[Card]) -> bool:
    return n_of_a_kind(4, hand)

def straight_flush(hand: Tuple[Card]) -> bool:
    return straight(hand) and flush(hand)

def royal_flush(hand: Tuple[Card]) -> bool:
    return straight_flush and high_card_value(hand) == ranks[-1].value

def highest_value_score(hand: Tuple[Card]) -> int:
    return high_card_value(hand_values(hand))

def highest_paired_score(hand: Tuple[Card], base_score: int) -> int:
    g = dict(groupby(hand, lambda x: x.rank.value))
    return g

def state_to_dict(state: GameState) -> dict:
    return state._asdict()

def state_from_dict(state_dict: dict) -> GameState:
    state_values = []
    for k in GameState._fields:
        if k not in state_dict:
            raise Exception(f"state dict is missing required attribute \"{k}\"")
        else:
            state_values.append(state_dict[k])
    return GameState(*tuple(state_values))


def rank_to_dict(rank: Rank) -> dict:
    return rank._asdict()

def rank_from_dict(rank_dict: dict) -> Rank:
    rank_values = []
    for k in Rank._fields:
        if k not in rank_dict:
            raise Exception(f"rank dict is missing required attribute \"{k}\"")
        else:
            rank_values.append(rank_dict[k])
    return Rank(*tuple(rank_values))

def card_to_dict(card: Card) -> dict:
    card_dict = {}
    for k in Card._fields:
        value = getattr(card, k)
        if k == 'rank':
            card_dict[k] = rank_to_dict(value)
        else:
            card_dict[k] = value
    return card_dict

def card_from_dict(card_dict: dict) -> Card:
    card_values = []
    for k in Card._fields:
        if k not in card_dict:
            raise Exception(f"card dict is missing required attribute \"{k}\"")
        if k == 'rank':
            card_values.append(rank_from_dict(card_dict[k]))
        else:
            card_values.append(card_dict[k])
    return Card(*tuple(card_values))

def player_to_dict(player: Player) -> dict:
    player_dict = {}
    for k in Player._fields:
        value = getattr(player, k)
        if k == 'hand':
            player_dict[k] = ([card_to_dict(c) for c in value] if value else None)
        else:
            player_dict[k] = value
    return player_dict

def player_from_dict(player_dict: dict) -> Player:
    player_values = []
    for k in Player._fields:
        if k not in player_dict:
            raise Exception(f"player dict is missing required attribute \"{k}\"")
        elif k == 'hand':
            hand = (tuple(card_from_dict(c) for c in player_dict[k])
                    if player_dict[k] else
                    None)
            player_values.append(hand)
        else:
            player_values.append(player_dict[k])
    return Player(*tuple(player_values))

def game_to_dict(game: Game) -> dict:
    game_dict = {}
    for k in Game._fields:
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

def game_from_dict(game_dict: dict) -> Game:
    game_values = []
    for k in Game._fields:
        if k not in game_dict:
            raise Exception(f"game dict is missing required attribute \"{k}\"")
        elif k == 'players':
            players = tuple(player_from_dict(p) for p in game_dict[k])
            game_values.append(players)
        elif k == 'deck':
            deck = tuple(card_from_dict(c) for c in game_dict[k])
            game_values.append(deck)
        elif k == 'state':
            game_values.append(state_from_dict(game_dict[k]))
        else:
            game_values.append(game_dict[k])
    return Game(*tuple(game_values))

def get_shuffled_deck() -> List[Card]:
    deck_dict = [card_to_dict(c) for c in deck]
    random.shuffle(deck_dict)
    return deck_dict

initial_state = state_to_dict(game_states[0])

def init_game(game_dict: dict, new_id: str) -> Game:
    game_dict.update({'id': new_id,
                      'players': [],
                      'deck': get_shuffled_deck(),
                      'pot': 0,
                      'state': initial_state})
    return game_from_dict(game_dict)

def init_player(player_dict: dict) -> Player:
    player_dict.update({'hand': None,
                        'bet': None,
                        'position': None,
                        'sitting_out': True,
                        'is_active': False})
    return player_from_dict(player_dict)

def seats_taken(game: Game) -> Tuple[int]:
    return [p.seat_num for p in game.players]

def is_seat_empty(seat_num: int, game: Game) -> bool:
    return seat_num not in seats_taken(game)

class Result(NamedTuple):
    game: Game
    previous_state: Game
    log: str

def is_end_of_round(game: Game) -> bool:
    if all(p.)

def has_started(game: Game) -> bool:
    return game.state.name != 'WAITING_TO_START'


def join_game(player_dict: dict, game: Game) -> Result:
    new_player = init_player(player_dict)
    current_players = game.players
    assert is_seat_empty(new_player.seat_num, game)
    res_game = game._replace(players=(*current_players, new_player))
    return Result(res_game, game, f"player {new_player.id} joined game {game.id}")

def StateTransition(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        assert 'games' in kwargs
        result = func(*args, **kwargs)
        if has_started(result.game):
            if is_end_of_round(result.game):
                return next_round(result.game)
            else:
                return next_turn(result.game)
        elif start_game_q(result.game):
            return start_game(result.game)
        else:
            return result
    return wrapper

