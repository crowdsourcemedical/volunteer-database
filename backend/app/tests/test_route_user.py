def test_get_users_endpoint_empty(testclient):
    response = testclient.get("/users/")
    assert response.status_code == 200
    assert response.json() == []


def test_get_users_endpoint_data(testclient, db, unsaved_user):
    db.add(unsaved_user)
    db.commit()
    response = testclient.get("/users/")
    assert response.status_code == 200
    assert len(response.json()) == 1
