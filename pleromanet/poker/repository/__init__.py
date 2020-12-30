import pymongo
from bson import ObjectId

connection_string = 'mongodb://localhost:27017/'
poker_db = 'poker'
games_table = 'poker_games'
db = pymongo.MongoClient(connection_string)[poker_db]

def get_db():
    return pymongo.MongoClient(connection_string)[poker_db]

def init_db():
    pass

def create_game(game_dict):
    return str(db[games_table].insert_one(game_dict).inserted_id)

def update_game(game_id, game_dict):
    query = {'id': game_id}
    new_values = {'$set': game_dict}
    db[games_table].update_one(query, new_values)

def get_one_game(game_id):
    res = db[games_table].find_one({'id': game_id})
    if res:
        del res['_id']
    return res

def get_games():
    res = list(db[games_table].find({}))
    for x in res:
        del x['_id']
    return res

def delete_game(game_id):
    db[games_table].remove({'id': game_id})
