from uuid import uuid4
import logging
from pleromanet.poker import repository, model


def create_game(game_dict):
    id = str(uuid4())
    game_dict.update({'id': id,
                      'players': [],
                      'deck': model.get_shuffled_deck(),
                      'pot': 0,
                      'state': model.state_to_dict(
                          next(x for x in model.game_states
                               if x.name == 'WAITING_TO_START'))})
    logging.debug(model.game_from_dict(game_dict))
    repository.create_game(game_dict)
    return id

def get_games():
    return repository.get_games()

def get_one_game(game_id):
    return repository.get_one_game(game_id)

def update_game(game_id, game_dict):
    repository.update_game(game_id, game_dict)

def delete_game(game_id):
    repository.delete_game(game_id)
