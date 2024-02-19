### CELESTIAL PALATE(Version 1)
This project ongoing is built by two aspiring full stack engineers, to encapsulate the end of foundations with ALX.

[Celestial Palate](https://celestial.tophabiba.tech/public/) is an innovative website catering to a prestigious restaurant brand present across three diverse destinations: South Africa, Japan, and Italy. Designed with the customer in mind, this platform aims to elevate the dining experience by providing seamless digital interactions prior to visiting the restaurant.

![Alt Text](r_images/celestial.jpeg)
![Alt Text](r_images/celestial2.jpeg)


## AUTHORS
* [Habiba Adam Salisu](https://www.linkedin.com/in/habiba-adam-salisu-570555267/)
* [Memory Mukonda](https://www.linkedin.com/in/memory-mukonda-39ba06248/)

## Installation
First, clone this repository:
```bash
git clone https://github.com/mukoe2020/Celestial-Palate-Portfolio.git
```

NB:
Create a database in your SQL Server and name it "celestial" or according to another naming convention.
Additionally, you'll have to create a user and grant necessary privileges to that user for the new database.
```bash
CREATE DATABASE IF NOT EXISTS 'nameofyourdb';
CREATE USER IF NOT EXISTS 'user'@'localhost' IDENTIFIED BY 'yourpassword';
GRANT ALL PRIVILEGES ON nameofyourdb.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
```

Then, you'll update the connection strings in your SQL ORM script and Flask application to reflect the newly created user and database
SQL ORM script
```bash
connection_string = 'mysql+mysqlconnector://user:password@localhost/nameofyourdb'
```

Flask database connection strings
```bash
#config.py
  class Config:

    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://user:password@localhost/nameofyourdb'

    SQLALCHEMY_TRACK_MODIFICATIONS = False
```

# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

connection_string = 'mysql+mysqlconnector://user:password@localhost:3306/nameofyourdb'
engine = create_engine(connection_string, pool_pre_ping=True)
DBSession = sessionmaker(bind=engine)

```

## Tech Stack/Dependencies
You will need these langauges, frameworks and tools to set things up in your environment

* Python3.x
* Flask
* Node js
  - Bootstrap
* MySQL
* SQLAlchemy

## Short Demo
![Alt Text](r_images/celestial.gif)

## Incoming Additional Features
* Users receiving an email with order/reservation information.
* Calender showing available dates and times for reservations
* API rendering reviews instead of the static webpage

## Impressed with our project?
Show us some love by adding a star to this project right now! Thank you!

## Contributions
All contributions and suggestions for additional features are welcomed!
For suggestions, send us a DM [here](https://www.linkedin.com/in/habiba-adam-salisu-570555267/)
