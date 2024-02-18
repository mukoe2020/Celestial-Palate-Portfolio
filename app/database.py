# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


connection_string = 'mysql+mysqlconnector://habiba:babo@localhost:3306/celestial'
engine = create_engine(connection_string, pool_pre_ping=True)
DBSession = sessionmaker(bind=engine)
