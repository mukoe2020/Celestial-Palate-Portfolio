
from flask import jsonify, abort, request
from flask.blueprints import Blueprint
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime

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


@mongo_customers.route('/<string:customer_id>', methods=['GET'], strict_slashes=False)
def get_customer(customer_id):
    from v_2.rest.app import client
    database = client['celestial_db']
    collection = database['Customers']
    customer = collection.find_one({'_id': ObjectId(customer_id)})
    if customer:
        customer['_id'] = str(customer['_id'])
        return jsonify(customer), 200
    else:
        abort(404)


@mongo_customers.route('/', methods=['POST'], strict_slashes=False)
def create_customer():
    """creates a new customer"""
    from v_2.rest.app import client
    database = client['celestial_db']
    collection = database['Customers']
    if not request.json:
        abort(400)
    if 'first_name' not in request.json or 'last_name' not in request.json \
        or 'email' not in request.json or 'phone' not in request.json \
        or 'branch' not in request.json :
        abort(400)
    customer = { 'first_name': request.json['first_name'],
                    'last_name': request.json['last_name'],
                    'email': request.json['email'],
                    'phone': request.json['phone'],
                    'branch': request.json['branch'],
                    'created_at' : datetime.now(),
                    'updated_at' : datetime.now()
                }
    result = collection.insert_one(customer)
    # convert the ObjectId to string for jsonify
    customer['_id'] = str(result.inserted_id)
    return jsonify(customer), 201
