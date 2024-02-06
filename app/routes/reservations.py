from crypt import methods
from flask import Flask, jsonify, request, Blueprint
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


@reservations.route('/<customer_id>/<payment_id>', methods=['POST'])
def create_reservation(customer_id, payment_id):
    if request.method == 'POST':
        session = DBSession()
        new_reservation = Reservation(
            customer_id=customer_id,
            payment_id=payment_id,
            num_of_guests=request.json['num_of_guests'],
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )
        session.add(new_reservation)
        session.commit()
        session.close()
        return jsonify(message="Reservation created successfully")


@reservations.route('/<reservation_id>', methods=['PUT'])
def update_reservation(reservation_id):
    session = DBSession()
    reservation = session.query(Reservation).filter_by(
        id=reservation_id).first()
    if reservation:
        reservation.num_of_guests = request.json['num_of_guests']
        reservation.updated_at = datetime.utcnow()
        session.commit()
        session.close()
        return jsonify(message="Reservation updated successfully")
    else:
        session.close()
        return jsonify(message="Reservation not found"), 404
