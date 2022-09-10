from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='DemoUser', email='demo@thisapp.io', password='password')
    chase = User(
        username='ChaseRiddick', email='chaseriddick@outlook.com', password='password')
    kevin = User(
        username = 'kevlin2358', email = 'kevl@gmail.com', password = 'password')
    rohan = User(
        username = 'rohansurve212', email = 'rohansurve212@gmail.com', password = 'password')
    vish = User(
        username = 'vishran325', email = 'vishran325@outlook.com', password = 'password')
    peter = User(
        username = 'petejoh85', email = 'petejoh85@yahoo.com', password = 'password')

    db.session.add(demo)
    db.session.add(chase)
    db.session.add(kevin)
    db.session.add(rohan)
    db.session.add(vish)
    db.session.add(peter)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
