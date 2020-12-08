from collections import namedtuple

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
     next(x for x in deck if c.rank.name == name and c.suit == suit))

hand_values =\
    (lambda hand:
     [card.rank.value for card in hand])

def n_of_a_kind(n, hand):
    hv = hand_values(hand)
    return any(hv.count(v) == n for v in hv)



