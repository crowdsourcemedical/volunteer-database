from typing import Dict

from ...models import User


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
    response = testclient.put("/me", headers=headers, json={
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
    response = testclient.put("/me", headers=headers, json={
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


def test_update_self_password_no_match(testclient, reattach_db, unsaved_user):
    db = reattach_db()
    headers = _seed_user_and_login(testclient, db, unsaved_user)
    db.close()
    response = testclient.put("/me", headers=headers, json={
        "old_password": "wrong password",
        "new_password": "doesn't matter"
    })
    assert response.status_code == 400
    assert response.text == '''{"detail":"Current password did not match"}'''


def test_update_self_password_no_old(testclient, reattach_db, unsaved_user):
    db = reattach_db()
    headers = _seed_user_and_login(testclient, db, unsaved_user)
    db.close()
    response = testclient.put("/me", headers=headers, json={
        "new_password": "new password",
    })
    assert response.status_code == 400
    assert response.text == '''{"detail":"Must also supply current password"}'''


def test_get_me(testclient, reattach_db, unsaved_user_with_relations):
    db = reattach_db()
    headers = _seed_user_and_login(testclient, db, unsaved_user_with_relations)
    db.close()
    response = testclient.get("/me", headers=headers)
    res = response.json()
    assert response.status_code == 200
    assert len(res["skills"]) == 1
    assert len(res["projects"]) == 1
    assert res["projects"][0]["project"]["project_title"] == "Test Project"
    assert res["projects"][0]["position"]["position_name"] == "manager"


def test_update_self_password_too_short(testclient, reattach_db, unsaved_user):
    db = reattach_db()
    headers = _seed_user_and_login(testclient, db, unsaved_user)
    db.close()
    response = testclient.put("/me", headers=headers, json={
        "old_password": "password",
        "new_password": "1"
    })
    assert response.status_code == 400
    assert response.text == '''{"detail":"New password much be at least 8 characters long"}'''
