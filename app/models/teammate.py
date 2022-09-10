from email.policy import default
from .db import db
from datetime import datetime


class Teammate(db.Model):
    __tablename__ = 'teammates'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    pronunciation = db.Column(db.String(80), nullable=False)
    pronouns = db.Column(db.String(80), nullable=False)
    img_url = db.Column(db.String(255), default="https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=360")
    q1_ans = db.Column(db.String(255), nullable=False)
    q2_ans = db.Column(db.String(255), nullable=False)
    q3_ans = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    # relationships
    user = db.relationship('User', back_populates='teammates')

    # relationships
    def to_dict(self, **kwargs):
        out = {
            'id': self.id,
            'user_id': self.user_id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'pronunciation': self.pronunciation,
            'pronouns': self.pronouns,
            'img_url': self.img_url,
            'q1_ans': self.q1_ans,
            'q2_ans': self.q2_ans,
            'q3_ans': self.q3_ans,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
        return out