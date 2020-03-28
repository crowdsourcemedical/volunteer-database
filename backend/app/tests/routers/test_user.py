from typing import Dict

from ...models import User


def test_get_users_empty(testclient):
    response = testclient.get("/users/")
    assert response.status_code == 200
    assert response.json() == []


def test_get_users_data(testclient, db, unsaved_user):
    db.add(unsaved_user)
    db.commit()
    response = testclient.get("/users/")
    assert response.status_code == 200
    assert len(response.json()) == 1


def test_create_user(testclient, db, unsaved_user):
    userCreate = {
        "user_email": unsaved_user.user_email,
        "user_first": unsaved_user.user_first,
        "user_last": unsaved_user.user_last,
        "user_password": "password",
        "user_is_medical_professional": unsaved_user.user_is_medical_professional,
        "user_is_volunteer": unsaved_user.user_is_volunteer,
        "user_is_active": True,
        "user_is_admin": False,
        "user_is_verified": False
    }
    response = testclient.post("/users/", json=userCreate)
    assert response.status_code == 201
    assert response.json() == {"user_id": 1}
