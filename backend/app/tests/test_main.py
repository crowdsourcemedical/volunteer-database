def test_root(testclient):
    response = testclient.get("/", allow_redirects=False)
    assert response.status_code == 307
    assert not response.text

    response = testclient.get("/")
    assert response.status_code == 200
    assert response.text
    assert response.url.endswith("/docs")


def test_login_and_verify(db, unsaved_user, testclient):
    db.add(unsaved_user)
    db.commit()
    response = testclient.post("/token", data={
        "username": unsaved_user.user_email,
        "password": "password"
    })
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 2
    assert data["token_type"] == "bearer"
    assert "access_token" in data

    token = data["access_token"]
    response = testclient.get("/token/verify", headers={
        "Authorization": f"Bearer {token}"
    })
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 4
    assert data["user_id"] == 1


def test_login_invalid_creds(db, unsaved_user, testclient):
    db.add(unsaved_user)
    db.commit()
    response = testclient.post("/token", data={
        "username": unsaved_user.user_email,
        "password": "wrong_password"
    })
    assert response.status_code == 400
