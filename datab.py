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
    payments = relationship('Payment', back_populates='customer')

    """ one to many relation between a customer and his/her reservations"""
    reservations = relationship('Reservation', back_populates='customer')


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
    customer = relationship('Customer', back_populates='payments')

    """one to one relation between a payment and a reservation"""
    reservation = relationship(
        'Reservation', uselist=False, back_populates='payment')


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
    customer = relationship('Customer', back_populates='reservations')

    """a back reference to the payment made for the reservation"""
    payment = relationship('Payment', back_populates='reservation')


engine = create_engine(
    'mysql+mysqlconnector://habiba:babo@localhost/celestial')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

#inputting data into the database
"""
    first_name='Memory',
    last_name='Doe',
    email='john.doe@example.com',
    phone_number='1234567890'
)

new_customer2 = Customer(
    first_name='Manny',
    last_name='Quinn',
    email='mannyquinn@example.com',
    phone_number='0334567890'
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
"""

new_payment = Payment(
    customer_id='2444b80e-506a-4994-8897-50bcc7f636f7',
    amount=100,
    status='completed'
)

session.add(new_payment)
session.commit()
session.close()