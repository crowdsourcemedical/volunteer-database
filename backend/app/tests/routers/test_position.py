from ...models import Position


def test_get_positions_empty_db(testclient):
    response = testclient.get("/positions/")
    assert response.status_code == 200
    assert response.json() == []


def test_get_positions(testclient, db, unsaved_position):
    db.add(unsaved_position)
    db.commit()
    response = testclient.get("/positions/")
    assert response.status_code == 200
    assert len(response.json()) == 1


def test_create_position(testclient):
    response = testclient.post("/positions/", json={
        "position_name": "manager"
    })
    assert response.status_code == 200
    assert response.json()["position_id"] == 1


def test_get_position_404(testclient):
    response = testclient.get("/positions/1")
    assert response.status_code == 404


def test_get_position(testclient, db, unsaved_position):
    db.add(unsaved_position)
    db.commit()
    response = testclient.get("/positions/1")
    assert response.status_code == 200
    assert response.json()["position_id"] == 1


def test_update_position(testclient, db, unsaved_position, reattach_db):
    db.add(unsaved_position)
    db.commit()
    response = testclient.put("/positions/1", json={
        "position_name": "something else"
    })
    assert response.status_code == 200
    db = reattach_db()
    assert db.query(Position).first().position_name == "something else"
    db.close()


def test_delete_position_404(testclient):
    response = testclient.delete("/positions/1")
    assert response.status_code == 404


def test_delete_position(testclient, db, unsaved_position, reattach_db):
    db.add(unsaved_position)
    db.commit()
    response = testclient.delete("/positions/1")
    assert response.status_code == 200
    db = reattach_db()
    assert len(db.query(Position).all()) == 0
    db.close()
