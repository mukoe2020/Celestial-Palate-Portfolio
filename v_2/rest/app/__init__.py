from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
from v_2.rest.app.all_routes.cust import mongo_customers


app = Flask(__name__)
app.config.from_object('v_2.rest.app.config.Config')

client = MongoClient(app.config['MONGO_STRING'])

# testing mongo database connection
"""
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    database = client['celestial_db']
    collection = database['Customers']
    all_docs = collection.find()
    print(list(all_docs))
except Exception as e:
    print(e)
"""


# Export the client object
__all__ = ['app', 'client']


app.register_blueprint(mongo_customers, url_prefix='/v_2/mongo_customers')


if __name__ == '__main__':
    app.run()
