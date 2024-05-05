from flask import jsonify, abort, request
from flask.blueprints import Blueprint
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime

mongo_reservations = Blueprint('mongo_reservations', __name__)

@mongo_reservations.route('/', methods=['GET'], strict_slashes=False)
def get_reservations():
    from v_2.rest.app import client
    database = client['celestial_db']
    collection = database['Reservations']
    all_docs = collection.find()

    """converting the ObjectId to string for jsonify"""
    reservations = []
    for reserved in all_docs:
        reserved['_id'] = str(reserved['_id'])
        reserved['customer_id'] = str(reserved['customer_id'])
        reserved['payment_id'] = str(reserved['payment_id'])
        reservations.append(reserved)
    return jsonify(list(reservations)), 200


@mongo_reservations.route('/<string:reservation_id>', methods=['GET'], strict_slashes=False)
def get_reservation(reservation_id):
    from v_2.rest.app import client
    database = client['celestial_db']
    collection = database['Reservations']
    reservation = collection.find_one({'_id': ObjectId(reservation_id)})
    if reservation:
        reservation['_id'] = str(reservation['_id'])
        reservation['customer_id'] = str(reservation['customer_id'])
        reservation['payment_id'] = str(reservation['payment_id'])
        return jsonify(reservation), 200
    else:
        abort(404)

@mongo_reservations.route('/', methods=['POST'], strict_slashes=False)
def create_reservation():
    """creates a new reservation"""
    from v_2.rest.app import client
    database = client['celestial_db']
    collection = database['Reservations']
    if not request.json:
        abort(400)
    if 'payment_id' not in request.json or 'customer_id' not in request.json \
        or 'num_of_guest' not in request.json:
        abort(400)
    reservation = { 'payment_id': request.json['payment_id'],
                    'customer_id': request.json['customer_id'],
                    'num_of_guest': request.json['num_of_guest'],
                    'created_at' : datetime.now(),
                    'updated_at' : datetime.now()
                }
    result = collection.insert_one(reservation)
    # convert the ObjectId to string for jsonify
    reservation['_id'] = str(result.inserted_id)
    reservation['customer_id'] = str(reservation['customer_id'])
    reservation['payment_id'] = str(reservation['payment_id'])
    return jsonify(reservation), 201