#!/usr/bin/env python3
from dotenv import load_dotenv
from datetime import datetime
load_dotenv()

import os
from pymongo import MongoClient
from pymongo.server_api import ServerApi

user_name = os.environ.get('MONGO_USER')
passw= os.environ.get('MONGO_PASS')

uri = f"mongodb+srv://memory:mukoe@celestial.qtekhwe.mongodb.net/?retryWrites=true&w=majority&appName=Celestial"
client = MongoClient(uri, server_api=ServerApi('1'))

database = client['celestial_db']

"""defining collections"""
customer_col = database['Customers']
payment_col = database['Payments']
reservation_col = database['Reservations']
reviews_col = database['Reviews']

"""sample data insertion"""
users_data = [
    {
        "first_name": "janet",
        "last_name": "wilson",
        "email": "janetwilson@gmail.com",
        "phone": "1234567890",
        "branch": "african",
        "created_at": datetime.now(),
        "updated_at": datetime.now()
    },
    {
        "first_name": "thor",
        "last_name": "langford",
        "email": "thorlan@gmail.com",
        "phone": "0987654321",
        "branch": "italian",
        "created_at": datetime.now(),
        "updated_at": datetime.now()
    },
    {
        "first_name": "salem",
        "last_name": "duke",
        "email": "salemdue@gmail.com",
        "phone": "4569874501",
        "created_at": datetime.now(),
        "updated_at": datetime.now()
    },
    {
       "first_name": "Itadori",
       "last_name": "Yuuji",
       "email": "itadori@gmail.com",
       "phone":"44859562",
       "branch": "japanese",
       "created_at": datetime.now(),
       "updated_at": datetime.now()
    }
]
""" inserting data into the customer collection"""
result = customer_col.insert_many(users_data)
customer_id = result.inserted_ids

user_payments= [
    {
    "customer_id" : customer_id,
    "amount" : 100,
    "status": "completed",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
},
{
    "customer_id" : customer_id,
    "amount" : 200,
    "status": "completed",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
},
{
    "customer_id" : customer_id,
    "amount" : 300,
    "status": "completed",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
},
{
    "customer_id" : customer_id,
    "amount" : 600,
    "status": "completed",
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}
]
#inserting data into the payment collection
p_input = payment_col.insert_many(user_payments)
payment_id = p_input.inserted_ids

user_reservations = [
    {
    "customer_id" : customer_id,
    "payment_id": payment_id,
    "num_of_guests": 2,
    "created_at": datetime.now(),
    "updated_at": datetime.now()
},
{
    "customer_id" : customer_id,
    "payment_id": payment_id,
    "num_of_guests": 4,
    "created_at": datetime.now(),
    "updated_at": datetime.now()
},
{
    "customer_id" : customer_id,
    "payment_id": payment_id,
    "num_of_guests": 6,
    "created_at": datetime.now(),
    "updated_at": datetime.now()
},
{
    "customer_id" : customer_id,
    "payment_id": payment_id,
    "num_of_guests": 8,
    "created_at": datetime.now(),
    "updated_at": datetime.now()
}
]
#inserting data into the reservation collection
user_input = reservation_col.insert_many(user_reservations)
reservation_id = r_input.inserted_ids

customers_reviews= [
    {
    "customer_id": customer_id,  # Use the inserted customer ID
    "reservation_id": reservation_id,
    "rating": 5,
    "comment": "Absolutely divine! The flavors at Celestial Palate are out of this world, " +
               "From the perfectly seasoned Jollof rice to the succulent braised chicken, every " +
               "bite is a culinary delight",
    },
    {
    "customer_id": customer_id,  # Use the inserted customer ID
    "reservation_id": reservation_id,
    "rating": 4,
    "comment": "I had the pleasure of dining at Celestial Palate,it was an unforgettable experience. "+
                "The ambiance was charming, the service was impeccable. "+
                "and the Chicken Marsala was the highlight of my meal"
    },
    {
    "customer_id": customer_id,  # Use the inserted customer ID
    "reservation_id": reservation_id,
    "rating": 3,
    "comment": " I was delighted by their authentic Udon noodles and red bean dorayaki the most.  "+
                "The taste, service, and ambiance were all perfect. I would love to visit again!"+
                "Arigatou Kozaimass!"
    },
]
reviews_col.insert_many(customers_reviews)
"""
try:
    reservation_col.insert_one(first_reservation)
    print("You have successfully inserted a document into collections")

except Exception as e:
    print(e)
"""