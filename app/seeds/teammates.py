from app.models import db, Teammate

def seed_subposts():
    db.session.add_all(
        [
            Teammate(
                user_id = '1',
                first_name = 'Chase',
                last_name = 'Riddick',
                pronunciation = 'Ch - ace Rid -ick',
                pronouns = 'he / him / his',
                img_url = 'https://avatars.githubusercontent.com/u/70459435?v=4',
                q1_ans = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc',
                q2_ans = 'mi ipsum. Et malesuada fames ac turpis egestas sed tempus urna. Massa placerat duis ultricies lacus sed turpis tincidunt. Arcu felis',
                q3_ans = 'ibendum ut tristique et. In egestas erat imperdiet sed euismod. Varius sit amet mattis vulputate enim nulla'
            ),
            Teammate(
                user_id = '1',
                first_name = 'Kevin',
                last_name = 'Lin',
                pronunciation = "Kev - in 'L'-in",
                pronouns = 'he / him / his',
                img_url = 'https://avatars.githubusercontent.com/u/47483994?s=400&u=8a8a81917e9f420e08d74a9f5daaf8f4126a4274&v=4',
                q1_ans = 'us in metus vulputate eu scelerisque. In tellus integer feugiat',
                q2_ans = 'ismod quis viverra nibh cras pulvinar mattis. Nisl vel pretium lectus quam id leo. Id semper risus in hendrerit gravida rutrum quisque non. Mauris sit amet massa vitae',
                q3_ans = 'tor consequat id porta nibh venenatis cras. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Lectus arcu bibendum at varius vel pharetra vel.'
            ),
            Teammate(
                user_id = '1',
                first_name = 'Vishakha',
                last_name = 'Rani',
                pronunciation = 'V - sha - kha  Ra - ni',
                pronouns = 'she / her / hers',
                img_url = '',
                q1_ans = 'orbi tincidunt ornare. Sed pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Diam vulputate ut pharetra sit ',
                q2_ans = 'aliquam id diam. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Id venenatis a condimentum vitae sapien pellentesque hab',
                q3_ans = 'um nunc aliquet bibendum enim facilisis. Nec nam aliquam se',
            ),
            Teammate(
                user_id = '1',
                first_name = 'Rohan',
                last_name = 'Surve',
                pronunciation = 'Ro - han Sue-r-way',
                pronouns = 'he / him / his',
                img_url = 'https://avatars.githubusercontent.com/u/40344605?v=4',
                q1_ans = 'Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Nec dui nunc mattis eni',
                q2_ans = 'am. Turpis egestas pretium aenean phar',
                q3_ans = 'llis. Leo a diam sollicitudin tempor id eu nisl. Adipiscing elit duis tristique',
            ),
            Teammate(
                user_id = '1',
                first_name = 'Peter',
                last_name = 'Joh',
                pronunciation = 'Pet - er Jo-h',
                pronouns = 'he / him / his',
                img_url = 'https://media-exp1.licdn.com/dms/image/C4D03AQGiy9gobypH3A/profile-displayphoto-shrink_800_800/0/1638952136651?e=1668038400&v=beta&t=oo6R_QA9N3zqGhsQ0-hgdMYHvZq1f2Qj4mU4DvajKB8',
                q1_ans = 'us mus mauris vitae ultricies. Nunc id cursus met',
                q2_ans = 'nteger feugiat scelerisque varius. Adipiscing elit ut aliquam purus sit. Elementum curabitu',
                q3_ans = ' ultrices in iaculis nunc sed augue lacus. Tortor dignissim convallis aenean et tortor. A erat nam at lectus urna duis conv',
            ),

        ]
    )
    db.session.commit()

def undo_subposts():
    db.session.execute('TRUNCATE subposts RESTART IDENTITY CASCADE;')
    db.session.commit()