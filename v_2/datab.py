#!/usr/bin/env python3
from dotenv import load_dotenv
load_dotenv()

import os
from pymongo import MongoClient
from pymongo.server_api import ServerApi

user_name = os.environ.get('MONGO_USER')
passw= os.environ.get('MONGO_PASS')

uri = f"mongodb+srv://{user_name}:{passw}@celestial.qtekhwe.mongodb.net/?retryWrites=true&w=majority&appName=Celestial"
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
