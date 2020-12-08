from pleromanet.model.poker import *


def test_n_of_a_kind():
    hand =  [Card(Rank(':two', 2), ":clubs"),
             Card(Rank(':two', 2), ":clubs")]
    assert n_of_a_kind(2, hand)
