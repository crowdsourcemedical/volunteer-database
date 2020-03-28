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


def _seed_user_and_login(testclient, db, unsaved_user) -> Dict[str, str]:
    db.add(unsaved_user)
    db.commit()
    auth_response = testclient.post("/token", data={
        "username": unsaved_user.user_email,
        "password": "password"
    })
    token = auth_response.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}


def test_update_self_not_password(testclient, reattach_db, unsaved_user):
    db = reattach_db()
    headers = _seed_user_and_login(testclient, db, unsaved_user)
    db.close()
    response = testclient.put("/users/me", headers=headers, json={
        "user_first": "new_first_name",
        "user_location": "new location"
    })
    assert response.status_code == 200
    assert not response.text
    db = reattach_db()
    assert len(db.query(User).all()) == 1
    db_user = db.query(User).first()
    assert db_user.user_first == "new_first_name"
    assert db_user.user_location == "new location"
    db.close()


def test_update_self_password(testclient, reattach_db, unsaved_user):
    db = reattach_db()
    headers = _seed_user_and_login(testclient, db, unsaved_user)
    orig_password = db.query(User).first().user_hashed_password
    db.close()
    response = testclient.put("/users/me", headers=headers, json={
        "old_password": "password",
        "new_password": "password 2"
    })
    assert response.status_code == 200
    assert not response.text
    db = reattach_db()
    assert len(db.query(User).all()) == 1
    db_user = db.query(User).first()
    assert db_user.user_hashed_password != orig_password
    db.close()


def test_update_self_password_invalid(testclient, reattach_db, unsaved_user):
    db = reattach_db()
    headers = _seed_user_and_login(testclient, db, unsaved_user)
    db.close()
    response = testclient.put("/users/me", headers=headers, json={
        "old_password": "wrong password",
        "new_password": "doesn't matter"
    })
    assert response.status_code == 400
    assert response.text == '''{"detail":"Current password did not match"}'''


def test_update_self_password_no_old(testclient, reattach_db, unsaved_user):
    db = reattach_db()
    headers = _seed_user_and_login(testclient, db, unsaved_user)
    db.close()
    response = testclient.put("/users/me", headers=headers, json={
        "new_password": "new password",
    })
    assert response.status_code == 400
    assert response.text == '''{"detail":"Must also supply current password"}'''
