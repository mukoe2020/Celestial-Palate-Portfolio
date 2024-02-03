from flask import Flask, jsonify, request
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from datab import Customer, Payment, Reservation, Base

app = Flask(__name__)

# Define the connection string to connect to the MySQL database
connection_string = 'mysql+mysqlconnector://habiba:celestial@celestial'
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
def create_payment():
    if request.method == 'POST':
        session = DBSession()
        # Assuming request contains customer_id, amount, and status
        new_payment = Payment(customer_id=request.json['customer_id'], amount=request.json['amount'], status=request.json['status'],
                              created_at=datetime.utcnow(), updated_at=datetime.utcnow())
        session.add(new_payment)
        session.commit()
        session.close()
        return jsonify(message="Payment created successfully")

# Add more endpoints for other CRUD operations (e.g., creating reservations, updating customer details, etc.)

if __name__ == '__main__':
    app.run(debug=True)

