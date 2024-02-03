from flask import Flask, jsonify, request, Blueprint
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from app.database import DBSession
from datab import Payment, Base

app = Flask(__name__)

payments = Blueprint('payments', __name__)


@payments.route('/', methods=['GET'])
def get_payments():
    session = DBSession()
    payments = session.query(Payment).all()
    payment_list = [{'id': p.id, 'amount': p.amount, 'created_at': p.created_at, 'updated_at': p.updated_at}
                    for p in payments]
    session.close()
    return jsonify(payments=payment_list)
