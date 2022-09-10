from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Teammate
from sqlalchemy.orm import joinedload


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.options(joinedload('teammates'))
    return {user.id: user.to_dict(teammates = user.teammates) for user in users}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
