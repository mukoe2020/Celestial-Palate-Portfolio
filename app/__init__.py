# app/__init__.py
from flask import Flask
from app.routes.customers import customers

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    app.url_map.strict_slashes = False
    app.debug = True

    app.register_blueprint(customers, url_prefix='/customers')

    # ... other app setup code

    return app


if __name__ == "__main__":
    app = create_app()
    app.run()
