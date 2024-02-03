from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from flask import Flask, jsonify

app = Flask(__name__)

# Update the connection string with your Google Cloud SQL details
connection_string = 'mysql+mysqlconnector://memory:celestial@host/celestial'
engine = create_engine(connection_string)
Session = sessionmaker(bind=engine)

@app.route('/api/endpoint', methods=['GET'])
def database_interaction_endpoint():
    try:
        # Start a database session
        session = Session()

        # Perform database interactions here...
        # Example: Fetch data from the database
        result = session.execute('SELECT * FROM customer')

        session.close()  # Close the database session
        return jsonify({'result': [dict(row) for row in result]}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
