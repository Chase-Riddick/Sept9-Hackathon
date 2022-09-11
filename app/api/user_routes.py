from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Teammate, db
from app.forms import CreateTeammate
from sqlalchemy.orm import joinedload


user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


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

@user_routes.route('/create_teammate/<int:id>', methods=['POST'])
def create_user_teammate(id):

    form = CreateTeammate()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        teammate = Teammate(
            first_name=form.data['first_name'],
            last_name=form.data['last_name'],
            pronunciation=form.data['pronunciation'],
            pronouns=form.data['pronouns'],
            q1_ans=form.data['q1_ans'],
            q2_ans=form.data['q2_ans'],
            q3_ans=form.data['q3_ans'],
            user_id=id
        )
        db.session.add(teammate)
        db.session.commit()
        return teammate.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
