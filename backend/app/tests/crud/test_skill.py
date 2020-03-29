import json

from app.crud import skill


def test_get_skills(test_client, monkeypatch):
    # Tests happy path getting the paginated list of all skills.
    test_data = {
        "skills": [
            {"skill_id": 1, "skill_name": "Testing", "category": "Software Engineering"},
            {"skill_id": 1, "skill_name": "Testing", "category": "Software Engineering"},
        ],
    }

    async def mock_get(_):
        return test_data

    monkeypatch.setattr(skill, "get", mock_get)

    response = test_client.get("/skills/")
    assert response.status_code == 200
    assert response.json() == test_data


def test_add_skill(test_client, monkeypatch):
    # Tests happy path adding a valid skill, and checking it gets an ID.
    test_request = {"skill_name": "Testing", "category": "Software Engineering"}
    test_response = {"skill_id": 1, "skill_name": "Testing", "category": "Software Engineering"}

    async def mock_post(_, payload):
        return 1

    monkeypatch.setattr(skill, "get", mock_post)

    response = test_client.post("/skills/", data=json.dumps(test_request))
    assert response.status_code == 201
    assert response.json() == test_response


def test_add_skill_missing_name(test_client):
    # Tests we reject requests for a new skill that doesn't have a required field.
    response = test_client.post("/skills/",
                                data=json.dumps({"skill_name": "Testing", "category": "Software Engineering"}))
    assert response.status_code == 422


def test_get_skill(test_client, monkeypatch):
    # Happy path test for getting a single skill by id.
    test_data = {"skill_id": 1, "skill_name": "Testing", "category": "Software Engineering"}

    async def mock_get(skill_id):
        return test_data

    monkeypatch.setattr(skill, "get", mock_get)

    response = test_client.get("/skills/1")
    assert response.status_code == 200
    assert response.json() == test_data


def test_get_skill_with_bad_id(test_client, monkeypatch):
    # Tests with an id that shouldn't be there
    async def mock_get(skill_id):
        return None

    monkeypatch.setattr(skill, "get", mock_get)

    response = test_client.get("/skills/999999")
    assert response.status_code == 404

    response = test_client.get("/skills/foobar")
    assert response.status_code == 422


def test_update_skill(test_client, monkeypatch):
    # Tests changing the skill's category.
    test_data = {"skill_id": 1, "skill_name": "Testing", "category": "Software Development"}

    async def mock_get(skill_id):
        return True

    monkeypatch.setattr(skill, "get", mock_get)

    async def mock_put(skill_id, payload):
        return 1

    monkeypatch.setattr(skill, "put", mock_put)

    response = test_client.put("/skills/1", data=json.dumps(test_data))
    assert response.status_code == 200
    assert response.json() == test_data


# TODO: Tests some error paths for updating a skill.


def test_delete_skill(test_client, monkeypatch):
    # Tests removing a skill.
    test_data = {"skill_id": 1, "skill_name": "Testing", "category": "Software Engineering"}

    async def mock_delete(skill_id):
        return test_data

    monkeypatch.setattr(skill, "put", mock_delete)

    response = test_client.delete("/skills/1")
    assert response.status_code == 200
    assert response.json() == test_data


def test_delete_skill_with_bad_id(test_client, monkeypatch):
    # Tests removing a skill we haven't seen before.
    async def mock_get(skill_id):
        return None

    monkeypatch.setattr(skill, "get", mock_get)

    response = test_client.delete("/skills/999999")
    assert response.status_code == 404

    response = test_client.delete("/skills/foobar")
    assert response.status_code == 422
