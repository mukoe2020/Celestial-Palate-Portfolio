<<<<<<< HEAD
from flask import Flask, jsonify, request, Blueprint
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, joinedload
from datetime import datetime
from app.database import DBSession
from datab import Customer, Payment, Reservation, Base

app = Flask(__name__)

payments = Blueprint('payments', __name__)


@payments.route('/', methods=['GET'])
def all_payments():
    session = DBSession()
    payments = session.query(Payment).options(joinedload(Payment.customer)).all()
    payment_list = [
        {
            'id': p.id,
            'customer_id': p.customer_id,
            'amount': p.amount,
            'status': p.status,
            'created_at': p.created_at,
            'updated_at': p.updated_at
        }
        for p in payments
    ]
    session.close()
    return jsonify(payments=payment_list)


@payments.route('<payment_id>', methods=['GET'])
def get_payment(payment_id):
    session = DBSession()
    payment = session.query(Payment).filter_by(id=payment_id).first()
    session.close()

    if payment:
        payment_info = {
            'id': payment.id,
            'customer_id': payment.customer_id,
            'amount': payment.amount,
            'status': payment.status,
            'created_at': payment.created_at,
            'updated_at': payment.updated_at
        }
        return jsonify(payment=payment_info)
    else:
        return jsonify(message="Payment not found"), 404


@payments.route('/<customer_id>/payments', methods=['POST']) # type: ignore
def create_payment(customer_id):
    if request.method == 'POST':
        session = DBSession()

        # Ensure the customer exists before creating a payment
        customer = session.query(Customer).filter_by(id=customer_id).first()
        if not customer:
            session.close()
            return jsonify(message=f"Customer with id {customer_id} not found"), 404

        new_payment = Payment(
            customer_id=customer_id,
            amount=request.json['amount'] if request.json and 'amount' in request.json else None,
            status=request.json['status'] if request.json and 'status' in request.json else 'pending',
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )
        session.add(new_payment)
        session.commit()
        session.close()
        return jsonify(message="Payment created successfully")




"""
@payments.route('/<payment_id>', methods=['PUT'])
def update_payment(payment_id):
    session = DBSession()
    payment = session.query(Payment).filter_by(id=payment_id).first()
    if payment:
        if request.json:
            payment.amount = request.json.get('amount')
            payment.status = request.json.get('status')
        payment.updated_at = datetime.utcnow() # type: ignore
        session.commit()
        session.close()
        return jsonify(message="Payment updated successfully")
    else:
        session.close()
        return jsonify(message="Payment not found"), 404
"""
=======
from flask import Flask, jsonify, request, Blueprint
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, joinedload
from datetime import datetime
from app.database import DBSession
from datab import Payment, Base, Customer

app = Flask(__name__)

payments = Blueprint('payments', __name__)


@payments.route('/', methods=['GET'])
def all_payments():
    session = DBSession()
    payments = session.query(Payment).options(
        joinedload(Payment.customer)).all()
    payment_list = [
        {
            'id': p.id,
            'customer_id': p.customer_id,
            'amount': p.amount,
            'status': p.status,
            'created_at': p.created_at,
            'updated_at': p.updated_at
        }
        for p in payments
    ]
    session.close()
    return jsonify(payments=payment_list)


@payments.route('<payment_id>', methods=['GET'])
def get_payment(payment_id):
    session = DBSession()
    payment = session.query(Payment).filter_by(id=payment_id).first()
    session.close()

    if payment:
        payment_info = {
            'id': payment.id,
            'customer_id': payment.customer_id,
            'amount': payment.amount,
            'status': payment.status,
            'created_at': payment.created_at,
            'updated_at': payment.updated_at
        }
        return jsonify(payment=payment_info)
    else:
        return jsonify(message="Payment not found"), 404

@payments.route('/<string:customer_id>/payments', methods=['POST']) # type: ignore
def create_payment(customer_id):
    if request.method == 'POST':
        session = DBSession()
        customer = session.query(Customer).filter_by(id=customer_id).first()
        if not customer:
            session.close()
            return jsonify(message=f"Customer with id {customer_id} not found"), 404

        amount = request.json.get('amount') if request.json else None
        status = 'completed' if amount == 100 else 'pending'

        new_payment = Payment(
            customer_id=customer_id,
            amount=amount,
            status=status,
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )
        if amount != 100:
            setattr(new_payment, 'status', 'pending')

        session.add(new_payment)
        session.commit()

        payment_data = {
            'id': new_payment.id,
            'customer_id': new_payment.customer_id,
            'amount': new_payment.amount,
            'status': new_payment.status,
            'created_at': new_payment.created_at,
            'updated_at': new_payment.updated_at
        }



        session.close()
        return jsonify(payment_data), 201


@payments.route('/<payment_id>', methods=['PUT'])
def update_payment(payment_id):
    session = DBSession()
    payment = session.query(Payment).filter_by(id=payment_id).first()
    if payment:
        if request.json:
            payment.amount = request.json.get('amount')
            payment.status = request.json.get('status')
        payment.updated_at = datetime.utcnow() # type: ignore
        session.commit()
        session.close()
        return jsonify(message="Payment updated successfully")
    else:
        session.close()
        return jsonify(message="Payment not found"), 404
>>>>>>> master
