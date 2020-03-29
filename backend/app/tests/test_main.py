def test_root(test_client):
    response = test_client.get("/")
    assert response.status_code == 200


def test_login_and_verify(db, unsaved_user, test_client):
    db.add(unsaved_user)
    db.commit()
    response = test_client.post("/token", data={
        "username": unsaved_user.user_email,
        "password": "password"
    })
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 2
    assert data["token_type"] == "bearer"
    assert "access_token" in data

    token = data["access_token"]
    response = test_client.get("/token/verify", headers={
        "Authorization": f"Bearer {token}"
    })
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 4
    assert data["user_id"] == 1


def test_login_invalid_creds(db, unsaved_user, test_client):
    db.add(unsaved_user)
    db.commit()
    response = test_client.post("/token", data={
        "username": unsaved_user.user_email,
        "password": "wrong_password"
    })
    assert response.status_code == 400
