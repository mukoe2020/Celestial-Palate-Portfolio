#!/usr/bin/env python3
from dotenv import load_dotenv
from datetime import datetime
load_dotenv()

import os
from pymongo import MongoClient
from pymongo.server_api import ServerApi

user_name = os.environ.get('MONGO_USER')
passw= os.environ.get('MONGO_PASS')

uri = f"mongodb+srv://{user_name}:{passw}@celestial.qtekhwe.mongodb.net/?retryWrites=true&w=majority&appName=Celestial"
client = MongoClient(uri, server_api=ServerApi('1'))

database = client['celestial_db']

"""defining collections"""
customer_col = database['Customers']
payment_col = database['Payments']
reservation_col = database['Reservations']
reviews_col = database['Reviews']

"""sample data insertion"""
first_user_data = {
    "first_name": "Memory",
    "last_name": "Doe",
    "email": "memorydoe@gmail.com",
    "phone": "1234567890",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}

input = customer_col.insert_one(first_user_data)
customer_id = input.inserted_id

first_payment = {
    "customer_id" : customer_id,
    "amount" : 100,
    "status": "completed",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}
p_input = payment_col.insert_one(first_payment)
payment_id = p_input.inserted_id

first_reservation = {
    "customer_id" : customer_id,
    "payment_id": payment_id,
    "num_of_guests": 2,
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}
reservation_col.insert_one(first_reservation)


"""
try:
    reservation_col.insert_one(first_reservation)
    print("You have successfully inserted a document into collections")

except Exception as e:
    print(e)
"""