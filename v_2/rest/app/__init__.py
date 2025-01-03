from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
from v_2.rest.app.all_routes.cust import mongo_customers
from v_2.rest.app.all_routes.pay import mongo_payments
from v_2.rest.app.all_routes.reserv import mongo_reservations
from dotenv import load_dotenv


load_dotenv()
app = Flask(__name__)
app.config.from_object('v_2.rest.app.config.Config')

client = MongoClient(app.config['MONGO_STRING'])

CORS(app)
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

app.register_blueprint(mongo_customers, url_prefix='/v_2/mongo_customers')
app.register_blueprint(mongo_payments, url_prefix='/v_2/mongo_payments')
app.register_blueprint(mongo_reservations, url_prefix='/v_2/mongo_reservations')

@app.route('/v_2/home', methods=['GET'])
def home_check():
    return jsonify({"status": "ok"}), 200


# Export the client object
__all__ = ['app', 'client']

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host="0.0.0.0", port=port)
