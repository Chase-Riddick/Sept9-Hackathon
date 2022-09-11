from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField
from wtforms import validators
from wtforms.validators import DataRequired, Length
import re


class CreateTeammate(FlaskForm):
    first_name = TextAreaField("first_name", validators=[DataRequired()])
    last_name = TextAreaField("last_name", validators=[DataRequired()])
    pronunciation = TextAreaField("pronunciation", validators=[DataRequired()])
    pronouns = TextAreaField("pronouns", validators=[DataRequired()])
    q1_ans = TextAreaField("q1_ans", validators=[DataRequired()])
    q2_ans = TextAreaField("q2_ans", validators=[DataRequired()])
    q3_ans = TextAreaField("q3_ans", validators=[DataRequired()])