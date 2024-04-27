from flask import Flask
from pymongo import MongoClient
from dotenv import load_dotenv
import os
load_dotenv()

user_name = os.environ.get('MONGO_USER')
passw = os.environ.get('MONGO_PASS')

class Config:
    MONGO_STRING = f"mongodb+srv://{user_name}:{passw}@celestial.qtekhwe.mongodb.net/?retryWrites=true&w=majority&appName=Celestial"
