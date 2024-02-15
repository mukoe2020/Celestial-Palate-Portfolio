from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, text
from sqlalchemy.orm import declarative_base, relationship, Session
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import uuid

Base = declarative_base()


def gen_uuid():
    return str(uuid.uuid4())


class Customer(Base):
    __tablename__ = 'customers'
    id = Column(String(36, collation='utf8_bin'), primary_key=True,
                default=gen_uuid, unique=True, nullable=False)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    email = Column(String(50), nullable=False)
    phone_number = Column(String(50), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    """ one to many relation between a customer and his/her payments"""
    payments = relationship('Payment', back_populates='customer'cascade='all, delete-orphan')

    """ one to many relation between a customer and his/her reservations"""
    reservations = relationship('Reservation', back_populates='customer'cascade='all, delete-orphan')


class Payment(Base):
    __tablename__ = 'payments'
    id = Column(String(36, collation='utf8_bin'), primary_key=True,
                default=gen_uuid, unique=True, nullable=False)
    customer_id = Column(String(36, collation='utf8_bin'), ForeignKey(
        'customers.id'), nullable=False)
    amount = Column(Integer, nullable=False)
    status = Column(String(20), default='pending', nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    """a back reference to the customer who made the payment"""
    customer = relationship('Customer', back_populates='payments'cascade='all, delete-orphan')

    """one to one relation between a payment and a reservation"""
    reservation = relationship(
        'Reservation', uselist=False, back_populates='payment'cascade='all, delete-orphan')


class Reservation(Base):
    __tablename__ = 'reservations'
    id = Column(String(36, collation='utf8_bin'), primary_key=True,
                default=gen_uuid, unique=True, nullable=False)
    customer_id = Column(String(36, collation='utf8_bin'), ForeignKey(
        'customers.id', ondelete='CASCADE'), nullable=False)
    payment_id = Column(String(36, collation='utf8_bin'), ForeignKey(
        'payments.id', ondelete='CASCADE'), nullable=False)
    num_of_guests = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    """a back reference to the customer who made the reservation"""
    customer = relationship('Customer', back_populates='reservations'cascade='all, delete-orphan')

    """a back reference to the payment made for the reservation"""
    payment = relationship('Payment', back_populates='reservation'cascade='all, delete-orphan')


connection_string = 'mysql+mysqlconnector://habiba:babo@localhost/celestial'
engine = create_engine(connection_string)
Session = sessionmaker(bind=engine)
Base.metadata.create_all(engine)
session = Session()

#inputting data into the database
"""
    first_name='Memory',
    last_name='Doe',
    email='john.doe@example.com',
    phone_number='1234567890'
)



new_customer3 = Customer(
    first_name='Habie',
    last_name='Doe',
    email='habie.doe@example.com',
    phone_number='0224567890'
)

new_customer4 = Customer(
    first_name='Astro',
    last_name='Doe',
    email='astro.doe@example.com',
    phone_number='7724567890'
)

session.add(new_customer2)
session.add(new_customer3)
session.add(new_customer4)



new_customer = Customer(
    first_name='Amor',
    last_name='Quinn',
    email='amorquinn@example.com',
    phone_number='0554567890'
)

new_payment = Payment(
    customer_id='6bb7e87d-b68d-4f0c-a9c0-ad548f9226db',
    amount=100,
    status='complete'
)

new_reservation = Reservation(
    customer_id='b608b303-3a0d-42b9-af9d-089298f7d3c9',
    payment_id='372e1ca3-485a-464a-9052-480e4f9c72ae',
    num_of_guests=4
)
session.add(new_reservation)
"""



session.commit()
session.close()
