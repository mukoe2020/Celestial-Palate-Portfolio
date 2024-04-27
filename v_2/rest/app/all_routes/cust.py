
from flask import jsonify, abort, request
from flask.blueprints import Blueprint
from pymongo import MongoClient
from bson import ObjectId

mongo_customers = Blueprint('mongo_customers', __name__)


@mongo_customers.route('/', methods=['GET'], strict_slashes=False)
def get_customers():
    from v_2.rest.app import client
    database = client['celestial_db']
    collection = database['Customers']
    all_docs = collection.find()

    """converting the ObjectId to string for jsonify"""
    customers = []
    for doc in all_docs:
        doc['_id'] = str(doc['_id'])
        customers.append(doc)
    return jsonify(list(customers)), 200
