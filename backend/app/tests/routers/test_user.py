def test_get_users_empty(test_client):
    response = test_client.get("/users/")
    assert response.status_code == 200
    assert response.json() == []


def test_get_users_data(test_client, db, unsaved_user):
    db.add(unsaved_user)
    db.commit()
    response = test_client.get("/users/")
    assert response.status_code == 200
    assert len(response.json()) == 1


def test_create_user(test_client, db, unsaved_user):
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
    response = test_client.post("/users/", json=userCreate)
    assert response.status_code == 201
    assert response.json() == {"user_id": 1}


def test_create_user_password_too_short(test_client, db, unsaved_user):
    userCreate = {
        "user_email": unsaved_user.user_email,
        "user_first": unsaved_user.user_first,
        "user_last": unsaved_user.user_last,
        "user_password": "1",
        "user_is_medical_professional": unsaved_user.user_is_medical_professional,
        "user_is_volunteer": unsaved_user.user_is_volunteer,
        "user_is_active": True,
        "user_is_admin": False,
        "user_is_verified": False
    }
    response = test_client.post("/users/", json=userCreate)
    assert response.status_code == 400
    assert response.json() == {"detail": "Password much be at least 8 characters long"}
