from crypt import methods
from flask import Flask, jsonify, make_response, request, Blueprint
from flask_cors import cross_origin
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from app.database import DBSession
from datab import Reservation, Base

app = Flask(__name__)

reservations = Blueprint('reservations', __name__)

@reservations.route('/', methods=['GET'])
def all_reservations():
    session = DBSession()
    reservations = session.query(Reservation).all()
    reservation_list = [
        {
            'id': r.id,
            'customer_id': r.customer_id,
            'payment_id': r.payment_id,
            'num_of_guests': r.num_of_guests,
            'created_at': r.created_at,
            'updated_at': r.updated_at
        }
        for r in reservations
    ]
    session.close()
    return jsonify(reservations=reservation_list)

@reservations.route('/<reservation_id>', methods=['GET'])
def get_reservation(reservation_id):
    session = DBSession()
    reservation = session.query(Reservation).filter_by(
        id=reservation_id).first()
    session.close()
    if reservation:
        return jsonify(reservation={'id': reservation.id, 'customer_id': reservation.customer_id, 'payment_id': reservation.payment_id, 'num_of_guests': reservation.num_of_guests, 'created_at': reservation.created_at, 'updated_at': reservation.updated_at})
    else:
        return jsonify(message="Reservation not found"), 404

@cross_origin()
@reservations.route('/<customer_id>/<payment_id>/reservations', methods=['POST', 'OPTIONS']) #type: ignore
def create_reservation(customer_id, payment_id):
    if request.method == 'POST':
        session = DBSession()
        new_reservation = Reservation(
            customer_id=customer_id,
            payment_id=payment_id,
            num_of_guests=request.json['num_of_guests'], #type: ignore
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )
        session.add(new_reservation)
        session.commit()

        reservation_data = {
            'id': new_reservation.id,
            'customer_id': new_reservation.customer_id,
            'payment_id': new_reservation.payment_id,
            'num_of_guests': new_reservation.num_of_guests,
            'created_at': new_reservation.created_at,
            'updated_at': new_reservation.updated_at
        }

        session.close()
        return jsonify(reservation_data), 201
    elif request.method == 'OPTIONS':
        # Handle preflight request
        response = make_response()
        response.headers.add("Access-Control-Allow-Methods", "POST")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        return response, 200

@reservations.route('/<reservation_id>', methods=['PUT'])
def update_reservation(reservation_id):
    session = DBSession()
    reservation = session.query(Reservation).filter_by(
        id=reservation_id).first()
    if reservation:
        if request.json is not None:
            reservation.num_of_guests = request.json['num_of_guests']
        reservation.updated_at = datetime.utcnow() #type: ignore
        session.commit()

        new_reservation = {
            'id': reservation.id,
            'customer_id': reservation.customer_id,
            'payment_id': reservation.payment_id,
            'num_of_guests': reservation.num_of_guests,
            'created_at': reservation.created_at,
            'updated_at': reservation.updated_at
        }
        session.close()
        return jsonify(new_reservation)
    else:
        return jsonify(message="Reservation not found"), 404
