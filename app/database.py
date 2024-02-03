# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Define the connection string to connect to the MySQL database
connection_string = 'mysql+mysqlconnector://habiba:babo@localhost:3306/celestial'
engine = create_engine(connection_string)
DBSession = sessionmaker(bind=engine)
