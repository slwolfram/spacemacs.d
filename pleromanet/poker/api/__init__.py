from flask_restx import Namespace, Resource, fields
from pleromanet.poker import repository, service
api = Namespace('poker', description='')

game_parser = api.parser()
game_parser.add_argument('name', type=str, required=True, location='json')
game_parser.add_argument('big_blind', type=int, required=True, location='json')
game_parser.add_argument('small_blind', type=int, required=True, location='json')
game_parser.add_argument('num_seats', type=int, required=True, location='json')

@api.route('/games/')
class GameList(Resource):
    def get(self):
        return service.get_games(), 200

    @api.doc(parser=game_parser)
    def post(self):
        game_dict = game_parser.parse_args()
        return service.create_game(game_dict), 201


@api.route('/games/id=<string:game_id>')
class Game(Resource):
    def get(self, game_id):
        return service.get_one_game(game_id), 200

    def delete(self, game_id):
        return service.delete_game(game_id), 204

    @api.doc(parser=game_parser)
    def put(self, game_id):
        game_dict = game_parser.parse_args()
        return service.update_game(game_id, game_dict), 200


@api.route('/games/id=<string:game_id>/players/id=<string:player_id>')
class Player(Resource):
    def get(self, game_id, player_id):
        return 'a player', 200

    def delete(self, game_id, player_id):
        return '', 204


@api.route('/games/id=<string:game_id>/players/')
class PlayerList(Resource):
    def get(self, game_id):
        return ['all', 'players'], 200

    def post(self, game_id):
        return 'player_id', 201

@api.route('/games/id=<string:game_id>/players/id=<string:player_id>/action=<string:player_action>')
class PlayerAction(Resource):
    def put(self, game_id, player_id, player_action):
        return '', 200

