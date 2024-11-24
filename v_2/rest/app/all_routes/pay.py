from flask import jsonify, abort, request
from flask.blueprints import Blueprint
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime

mongo_payments = Blueprint('mongo_payments', __name__)

@mongo_payments.route('/', methods=['GET'], strict_slashes=False)
def get_payments():
    from v_2.rest.app import client
    database = client['celestial_db']
    collection = database['Payments']
    all_docs = collection.find()

    """converting the ObjectId to string for jsonify"""
    payments = []
    for payment in all_docs:
        payment['_id'] = str(payment['_id'])
        payment['customer_id'] = str(payment['customer_id'])
        payments.append(payment)
    return jsonify(list(payments)), 200


@mongo_payments.route('/<string:payment_id>', methods=['GET'], strict_slashes=False)
def get_payment(payment_id):
    from v_2.rest.app import client
    database = client['celestial_db']
    collection = database['Payments']
    payment = collection.find_one({'_id': ObjectId(payment_id)})
    if payment:
        payment['_id'] = str(payment['_id'])
        payment['customer_id'] = str(payment['customer_id'])
        return jsonify(payment), 200
    else:
        abort(404)


@mongo_payments.route('/<customer_id>/payments', methods=['POST'], strict_slashes=False)
def create_payment(customer_id):
    """creates a new payment"""
    from v_2.rest.app import client
    database = client['celestial_db']
    collection = database['Payments']
    if not request.json:
        abort(400)
    if 'amount' not in request.json:
        abort(400)
    if 'amount' in request.json and request.json['amount'] == 100:
        request.json['status'] = "complete"
    else:
        request.json['status'] = "pending"

    payment = { 'customer_id': customer_id,
                'amount': request.json['amount'],
                'status': request.json['status'],
                'created_at' : datetime.now(),
                'updated_at' : datetime.now()
              }
    result = collection.insert_one(payment)
    # convert the ObjectId to string for jsonify
    payment['_id'] = str(result.inserted_id)
    payment['customer_id'] = str(payment['customer_id'])
    return jsonify(payment), 201