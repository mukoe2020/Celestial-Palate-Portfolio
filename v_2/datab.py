#!/usr/bin/env python3
from dotenv import load_dotenv
from datetime import datetime
load_dotenv()

import os
from pymongo import MongoClient
from pymongo.server_api import ServerApi

user_name = os.environ.get('MONGO_USER')
passw= os.environ.get('MONGO_PASS')

uri = f"mongodb+srv://{username}:{password}@celestial.qtekhwe.mongodb.net/?retryWrites=true&w=majority&appName=Celestial"
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

second_user_data = {
    "first_name": "kudzie",
    "last_name":  "musekwa",
    "email":    "kukumus@gmail.com",
    "phone": "0987654321",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}

third_user_data = {
    "first_name": "salem",
    "last_name": "duke",
    "email": "salemdue@gmail.com",
    "phone": "4569874501",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}
#inserting data into the collections
input = customer_col.insert_one(first_user_data)
customer_id = input.inserted_id

input = customer_col.insert_one(second_user_data)
customer_id = input.inserted_id

input = customer_col.insert_one(third_user_data)
customer_id = input.inserted_id

first_payment = {
    "customer_id" : customer_id,
    "amount" : 100,
    "status": "completed",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}

second_payment = {
    "customer_id" : customer_id,
    "amount" : 200,
    "status": "completed",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}

third_payment = {
    "customer_id" : customer_id,
    "amount" : 300,
    "status": "completed",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}

#innserting data into the payment collection
p_input = payment_col.insert_one(first_payment)
payment_id = p_input.inserted_id

p_input = payment_col.insert_one(second_payment)
payment_id = p_input.inserted_id

p_input = payment_col.insert_one(third_payment)
payment_id = p_input.inserted_id



first_reservation = {
    "customer_id" : customer_id,
    "payment_id": payment_id,
    "num_of_guests": 2,
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}

second_reservation = {
    "customer_id" : customer_id,
    "payment_id": payment_id,
    "num_of_guests": 4,
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}

third_reservation = {
    "customer_id" : customer_id,
    "payment_id": payment_id,
    "num_of_guests": 6,
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}
#inserting data into the reservation collection
reservation_col.insert_one(first_reservation)
reservation_col.insert_one(second_reservation)
reservation_col.insert_one(third_reservation)

"""
try:
    reservation_col.insert_one(first_reservation)
    print("You have successfully inserted a document into collections")

except Exception as e:
    print(e)
"""