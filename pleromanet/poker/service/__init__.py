from uuid import uuid4
from typing import List
import logging
from pleromanet.poker import repository, model

def create_game(game_dict: dict) -> str:
    id = str(uuid4())
    game = model.init_game(game_dict, id)
    repository.create_game(game)
    return id

def get_games() -> List[dict]:
    return repository._get_games()

def get_one_game(game_id) -> dict:
    return repository._get_one_game(game_id)

def update_game(game_id, game_dict) -> None:
    repository.update_game(game_id, game_dict)

def delete_game(game_id) -> None:
    repository.delete_game(game_id)

def add_player(game_id: str, player_dict: dict) -> str:
    id = str(uuid4())
    player_dict['id'] = id
    player = model.init_player(player_dict)
    repository.add_player(game_id, player)
    return id

def remove_player(game_id: str, player_id: str) -> None:
    repository.remove_player(game_id, player_id)

def get_one_player(game_id: str, player_id: str) -> dict:
    return repository._get_one_player(game_id, player_id)

def get_players(game_id: str) -> List[dict]:
    return repository._get_players(game_id)
