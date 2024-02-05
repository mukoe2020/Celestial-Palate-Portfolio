from flask import Flask, jsonify, request, Blueprint
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from app.database import DBSession
from datab import Customer, Payment, Reservation, Base

app = Flask(__name__)

payments = Blueprint('payments', __name__)

@payments.route('/customer_id',methods=['POST'])
def create_payment(customer_id):
    if request.method == 'POST':
        session = DBSession()
        new_payment = Payment(
            customer_id=customer_id,
            amount=request.json['amount'],
            status=request.json['status'],
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )
        session.add(new_payment)
        session.commit()
        session.close()
        return jsonify(message="Payment created successfully")

@payments.route('/<payment_id>', methods=['GET'])
def get_payment(payment_id):
    session = DBSession()
    payment = session.query(Payment).filter_by(id=payment_id).first()
    session.close()
    if payment:
        return jsonify(payment={'id': payment.id, 'customer_id': payment.customer_id, 'amount': payment.amount, 'status': payment.status, 'created_at': payment.created_at, 'updated_at': payment.updated_at})
    else:
        return jsonify(message="Payment not found"), 404

@payments.route('/<payment_id>', methods=['DELETE'])
def delete_payment(payment_id):
    session = DBSession()
    payment = session.query(Payment).filter_by(id=payment_id).first()
    if payment:
        session.delete(payment)
        session.commit()
        session.close()
        return jsonify(message="Payment deleted successfully")
    else:
        session.close()
        return jsonify(message="Payment not found"), 404

@payments.route('/<payment_id>', methods=['PUT'])
def update_payment(payment_id):
    session = DBSession()
    payment = session.query(Payment).filter_by(id=payment_id).first()
    if payment:
        payment.amount = request.json['amount']
        payment.status = request.json['status']
        payment.updated_at = datetime.utcnow()
        session.commit()
        session.close()
        return jsonify(message="Payment updated successfully")
    else:
        session.close()
        return jsonify(message="Payment not found"), 404

@payments.route('/<payment_id>/reservations', methods=['POST'])
def create_reservation(payment_id):
    if request.method == 'POST':
        session = DBSession()
        # Assuming request contains customer_id, payment_id, and num_of_guests
        new_reservation = Reservation(customer_id=request.json['customer_id'], payment_id=payment_id, num_of_guests=request.json['num_of_guests'],
                                      created_at=datetime.utcnow(), updated_at=datetime.utcnow())
        session.add(new_reservation)
        session.commit()
        session.close()
        return jsonify(message="Reservation created successfully")