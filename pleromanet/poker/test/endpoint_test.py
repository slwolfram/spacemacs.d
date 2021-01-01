import pytest
from pymongo_inmemory import MongoClient
from unittest.mock import MagicMock
from pleromanet.poker import repository, service, model
from pleromanet import create_app

@pytest.fixture
def flask_client():
    app = create_app()
    client = app.test_client()
    yield client

@pytest.fixture
def collection():
    client = MongoClient()
    db = client['poker']
    collection = db['poker_games']
    repository.get_games_table = MagicMock(return_value=collection)
    yield collection

def test_get_games(flask_client, collection):
    collection.insert_one({'field': 'test'})
    rv = flask_client.get('/api/poker/games/')
    assert b"{\"field\": \"test\"}" in rv.data

def test_get_one_game(flask_client, collection):
    collection.insert_one({'id': 'test'})
    rv = flask_client.get('/api/poker/games/id=test')
    assert b"{\"id\": \"test\"}" in rv.data

test_game = dict(name='test', big_blind=2, small_blind=1, num_seats=5)

def test_add_game(flask_client, collection):
    rv = flask_client.post('/api/poker/games/', json=test_game)
    assert rv.json
    assert collection.find_one({'id': rv.json})

def test_update_game(flask_client, collection):
    id = service.create_game(test_game)
    rv = flask_client.put('/api/poker/games/id=' + id, json=dict(test_game, name='update'))
    game = collection.find_one({'id': id})
    assert "update" == game['name']

def test_delete_game(flask_client, collection):
    id = service.create_game(test_game)
    assert collection.find_one({'id': id})
    rv = flask_client.delete('api/poker/games/id=' + id)
    assert not collection.find_one({'id': id})

test_player_payload =\
    dict(name='player3', seat_num=3, stack=10000)

test_player =\
    dict(id='id1', name='player1', hand=None, bet=None,
          position=None, sitting_out=True, seat_num=1, is_active=False)

test_players =\
    [test_player, dict(test_player, id='id2', name='player2', set_num=2)]

full_game =\
    dict(test_game, id='gameid',game='game1', state=model.initial_state,
         players=test_players, num_seats=2, pot=0, deck=model.get_shuffled_deck())

def test_get_player(flask_client, collection):
    collection.insert_one(full_game)
    rv = flask_client.get(
        f"/api/poker/games/id={full_game['id']}/players/id={test_players[0]['id']}")
    assert 'bet' in rv.json

def test_get_players(flask_client, collection):
    collection.insert_one(full_game)
    rv = flask_client.get(f"/api/poker/games/id={full_game['id']}/players/")
    assert 'player1' in rv.json[0]['name'] and 'player2' in rv.json[1]['name']

def test_add_player(flask_client, collection):
    id = service.create_game(test_game)
    rv = flask_client.post(f"/api/poker/games/id={id}/players/", json=test_player_payload)
    assert collection.find_one({'id': id})['players'][0]['stack'] == 10000

def test_remove_player(flask_client, collection):
    collection.insert_one(full_game)
    assert len(collection.find_one({'id': full_game['id']})['players']) == 2
    rv = flask_client.delete(
        f"/api/poker/games/id={full_game['id']}/players/id={test_players[0]['id']}")
    assert len(collection.find_one({'id': full_game['id']})['players']) == 1
