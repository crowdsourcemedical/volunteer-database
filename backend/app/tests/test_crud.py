from .. import crud, schemas


def test_get_user_empty_db(db):
    users = crud.get_user(db, 1)
    assert users is None


def test_get_user_by_email_empty_db(db):
    user = crud.get_user_by_email(db, "some@email")
    assert user is None


def test_get_users_empty_db(db):
    users = crud.get_users(db)
    assert len(users) == 0


def test_create_user(db):
    userData = schemas.UserCreate(
        user_email="some@where",
        user_first="AAA",
        user_last="BBB",
        user_password="GGG",
        user_is_active=True,
        user_is_admin=False,
        user_is_medical_professional=False,
        user_is_verified=False,
        user_is_volunteer=True
    )
    newUser = crud.create_user(db, userData)
    assert newUser.user_id == 1


def test_get_user(db):
    test_create_user(db)
    users = crud.get_user(db, 1)
    assert users is not None


def test_get_user_by_email(db):
    test_create_user(db)
    user = crud.get_user_by_email(db, "some@where")
    assert user is not None


def test_get_users(db):
    test_create_user(db)
    users = crud.get_users(db)
    assert len(users) == 1
