from flask import Flask
from flask_cors import CORS

from flask import Blueprint
from flask_restx import Api
from pleromanet.poker.api import api as poker_api

root_api = Blueprint('/', __name__)
api = Api(root_api, title='', description='')
api.add_namespace(poker_api)

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(root_api, url_prefix='/api')
    return app
