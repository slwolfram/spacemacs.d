from collections import namedtuple
from itertools import combinations, groupby

Rank = namedtuple('Rank', 'name value')
Card = namedtuple('Card', 'rank suit')

ranks =\
    [Rank(k, v) for v, k in enumerate
     (':two :three :four :five :six :seven :eight :nine :ten :jack :queen :king :ace'
      .split())]

suits =\
    (":clubs :diamonds :hearts :spades"
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


