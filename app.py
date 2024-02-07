from flask import Flask, jsonify, request
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from datab import Customer, Payment, Reservation, Base

app = Flask(__name__)

# Define the connection string to connect to the MySQL database
connection_string = 'mysql+mysqlconnector://root:celestial@localhost:3306/celestial'
engine = create_engine(connection_string)
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)

@app.route('/customers', methods=['GET'])
def get_customers():
    session = DBSession()
    customers = session.query(Customer).all()
    customer_list = [{'id': c.id, 'first_name': c.first_name, 'last_name': c.last_name, 'email': c.email, 'phone_number': c.phone_number, 'created_at': c.created_at, 'updated_at': c.updated_at}
                    for c in customers]
    session.close()
    return jsonify(customers=customer_list)

@app.route('/payments', methods=['POST'])
def create_payment() -> Response:
    if request.method == 'POST':
        session = DBSession()
        # Assuming request contains customer_id, amount, and status
        new_payment = Payment(customer_id=request.json['customer_id'], amount=request.json['amount'], status=request.json['status'],
                              created_at=datetime.utcnow(), updated_at=datetime.utcnow())
        session.add(new_payment)
        session.commit()
        session.close()
        return jsonify(message="Payment created successfully")
    
@app.route('/reservations', methods=['POST'])
def create_reservation() -> Response:
    if request.method == 'POST':
        session = DBSession()
        # Assuming request contains customer_id, payment_id, and num_of_guests
        new_reservation = Reservation(customer_id=request.json['customer_id'], payment_id=request.json['payment_id'], num_of_guests=request.json['num_of_guests'],
                                      created_at=datetime.utcnow(), updated_at=datetime.utcnow())
        session.add(new_reservation)
        session.commit()
        session.close()
        return jsonify(message="Reservation created successfully")


if __name__ == '__main__':
    app.run(debug=True)
