from app.models import db, Teammate

def seed_subposts():
    db.session.add_all(
        [
            Teammate(
                user_id = '1',
                first_name = 'Chase',
                last_name = 'Riddick',
                pronunciation = 'Ch - ace Rid -ick',
                pronouns = 'He / Him / His',
                img_url = '',
                q1_ans = '',
                q2_ans = '',
                q3_ans = ''
            ),
            Teammate(
                user_id = '1',
                first_name = 'Kevin',
                last_name = 'Lin',
                pronunciation = "Kev - in 'L'-in",
                pronouns = 'He / Him / His',
                img_url = '',
                q1_ans = '',
                q2_ans = '',
                q3_ans = ''
            ),
            Teammate(
                user_id = '1',
                first_name = 'Vishakha',
                last_name = 'Rani',
                pronunciation = '',
                pronouns = 'She / Her ',
                img_url = '',
                q1_ans = '',
                q2_ans = '',
                q3_ans = '',
            ),
            Teammate(
                user_id = '1',
                first_name = 'Rohan',
                last_name = 'Surve',
                pronunciation = '',
                pronouns = 'He / Him / His',
                img_url = '',
                q1_ans = '',
                q2_ans = '',
                q3_ans = '',
            ),
            Teammate(
                user_id = '1',
                first_name = '',
                last_name = '',
                pronunciation = '',
                pronouns = ''He / Him / His'',
                img_url = '',
                q1_ans = '',
                q2_ans = '',
                q3_ans = '',
            ),

        ]
    )
    db.session.commit()

def undo_subposts():
    db.session.execute('TRUNCATE subposts RESTART IDENTITY CASCADE;')
    db.session.commit()