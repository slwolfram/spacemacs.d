import pymongo
from typing import List, Tuple
from pleromanet.poker import model
from bson import ObjectId

connection_string = 'mongodb://localhost:27017/'
poker_db = 'poker'
games_table = 'poker_games'
db = pymongo.MongoClient(connection_string)[poker_db]

def get_db() -> pymongo.MongoClient:
    return pymongo.MongoClient(connection_string)[poker_db]

def init_db():
    pass

def create_game(game: str):
    game_dict = model.game_to_dict(game)
    db[games_table].insert_one(game_dict)

def update_game(game_id: str, game_dict: dict):
    query = {'id': game_id}
    new_values = {'$set': game_dict}
    db[games_table].update_one(query, new_values)

def _get_one_game(game_id: str) -> dict:
    res = db[games_table].find_one({'id': game_id})
    if res:
        del res['_id']
    return res

def get_one_game(game_id: str) -> model.Game:
    return model.game_from_dict(_get_one_game(game_id))

def _get_games() -> List[dict]:
    res = list(db[games_table].find({}))
    for x in res:
        del x['_id']
    return res

def get_games() -> Tuple[model.Game]:
    games = _get_games()
    return tuple(model.game_from_dict(g) for g in games)

def delete_game(game_id: str):
    db[games_table].remove({'id': game_id})

def _get_players(game_id: str) -> [List[dict]]:
    game = get_one_game(game_id)
    return game['players']

def get_players(game_id: str) -> [Tuple[model.Player]]:
    players = _get_players(game_id)
    return tuple(model.player_from_dict(p) for p in players)

def _get_one_player(game_id: str, player_id: str) -> [dict, None]:
    players = _get_players(game_id)
    return next((x for x in players if x['id'] == player_id), None)

def get_one_player(game_id: str, player_id: str) -> [model.Player, None]:
    return model.player_from_dict(_get_one_player(game_id))

def add_player(game_id: str, player: model.Player) -> None:
    game_dict = _get_one_game(game_id)
    player_dict = model.player_to_dict(player)
    game_dict['players'].append(player_dict)
    update_game(game_id, {'players': game_dict['players']})

def remove_player(game_id: str, player_id: str) -> None:
    game_dict = _get_one_game(game_id)
    for p in game_dict['players']:
        if p['id'] == player_id:
            game_dict['players'].remove(p)
