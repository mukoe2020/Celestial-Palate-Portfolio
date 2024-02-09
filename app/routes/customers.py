from flask import Flask, jsonify, request, Blueprint
from flask_cors import cross_origin
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from app.database import DBSession
from datab import Customer, Payment, Reservation, Base

app = Flask(__name__)


customers = Blueprint('customers', __name__)


@customers.route('/', methods=['GET'])
def get_customers():
    session = DBSession()
    customers = session.query(Customer).all()
    customer_list = [{'id': c.id, 'first_name': c.first_name, 'last_name': c.last_name, 'email': c.email, 'phone_number': c.phone_number, 'created_at': c.created_at, 'updated_at': c.updated_at}
                     for c in customers]
    session.close()
    return jsonify(customers=customer_list)


@customers.route('/<customer_id>', methods=['GET'])
def get_customer(customer_id):
    session = DBSession()
    customer = session.query(Customer).filter_by(id=customer_id).first()
    session.close()
    if customer:
        return jsonify(customer={'id': customer.id, 'first_name': customer.first_name, 'last_name': customer.last_name, 'email': customer.email, 'phone_number': customer.phone_number, 'created_at': customer.created_at, 'updated_at': customer.updated_at})
    else:
        return jsonify(message="Customer not found"), 404


@customers.route('/<customer_id>', methods=['DELETE'])
def delete_customer(customer_id):
    session = DBSession()
    customer = session.query(Customer).filter_by(id=customer_id).first()
    if customer:
        session.delete(customer)
        session.commit()
        session.close()
        return jsonify(message="Customer deleted successfully")
    else:
        session.close()
        return jsonify(message="Customer not found"), 404

@cross_origin()
@customers.route('/', methods=['POST', 'OPTIONS']) # type: ignore
def create_customer():
    if request.method == 'POST':
        session = DBSession()
        if request.json is not None:
            new_customer = Customer(
                first_name=request.json.get('first_name'),
                last_name=request.json.get('last_name'),
                email=request.json.get('email'),
                phone_number=request.json.get('phone_number'),
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            )
            session.add(new_customer)
            session.commit()
            customer_data = {
                'id': new_customer.id,
                'first_name': new_customer.first_name,
                'last_name': new_customer.last_name,
                'email': new_customer.email,
                'phone_number': new_customer.phone_number,
                'created_at': new_customer.created_at,
                'updated_at': new_customer.updated_at
            }
            session.close()
            return jsonify(customer_data), 201
        else:
            return jsonify(message="Invalid request"), 400


@customers.route('/<customer_id>', methods=['PUT']) # type: ignore
def update_customer(customer_id):
    if request.method == 'PUT':
        session = DBSession()
        customer = session.query(Customer).filter_by(id=customer_id).first()
        if customer:
            if request.json is not None:
                customer.first_name = request.json.get('first_name')
                customer.last_name = request.json.get('last_name')
                setattr(customer, 'updated_at', datetime.utcnow())
                session.commit()
                session.close()
                return jsonify(message="Customer updated successfully")
            else:
                return jsonify(message="Invalid request"), 400
        else:
            session.close()
            return jsonify(message="Customer not found"), 404