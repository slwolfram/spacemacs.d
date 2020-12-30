from flask import Blueprint
from flask_restx import Api
from .poker_api import api as poker_api


root_api = Blueprint('/', __name__)
api = Api(root_api, title='', description='')
api.add_namespace(poker_api)

