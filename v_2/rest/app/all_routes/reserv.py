from flask import jsonify, abort, request, make_response
from flask.blueprints import Blueprint
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime
from flask_cors import cross_origin

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

@cross_origin()
@mongo_reservations.route('/<customer_id>/<payment_id>/reservations', methods=['POST', 'OPTIONS'], strict_slashes=False)
def create_reservation(customer_id, payment_id):
    """creates a new reservation"""
    from v_2.rest.app import client
    database = client['celestial_db']
    collection = database['Reservations']
    if request.method == 'POST':
        if not request.json:
            abort(400)
        if 'num_of_guests' not in request.json:
            abort(400)
        reservation = { 'customer_id': customer_id,
        'payment_id': payment_id,
        'num_of_guests': request.json['num_of_guests'],
        'created_at' : datetime.now(),
        'updated_at' : datetime.now()
        }
        result = collection.insert_one(reservation)
        return jsonify({'id': str(result.inserted_id), 'customer_id': customer_id, 'payment_id': payment_id, 'num_of_guests': request.json['num_of_guests'], 'created_at': datetime.now(), 'updated_at': datetime.now()}), 201
    elif request.method == 'OPTIONS':
        # Handle preflight request
        response = make_response()
        response.headers.add("Access-Control-Allow-Methods", "POST")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        return response
