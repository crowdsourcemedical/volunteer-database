from .. import skill_crud, schemas


def test_get_skill_empty_db(db):
    response = skill_crud.get_skill_by_id(db, 1)
    assert response is None


def test_get_skill_by_skillname_empty_db(db):
    response = skill_crud.get_skill_by_name(db, "c++")
    assert response is None


def test_get_all_skills_empty_db(db):
    response = skill_crud.get_skills(db)
    assert len(response) == 0


def test_create_skill(db):
    skill_data = schemas.Skill(
        skill_name="C#",
        category="Development"
    )
    response = skill_crud.create_skill(db, skill_data)
    assert response.skill_id == 1


def test_get_skill_by_id(db):
    test_create_skill(db)
    response = skill_crud.get_skill_by_id(db, 1)
    assert response is not None


def test_get_skill_by_skillname(db):
    test_create_skill(db)
    response = skill_crud.get_skill_by_name(db, "C#")
    assert response is not None


def test_get_all_skills_1_entry_db(db):
    test_create_skill(db)
    response = skill_crud.get_skills(db)
    assert len(response) == 1


def test_update_skill(db):
    test_create_skill(db)
    skill_crud.update_skill(db, 1, {
        "skill_name": "Java",
        "category": "Development"
    })
    skill = skill_crud.get_skill_by_name(db, "Java")
    assert skill is not None


def test_update_skill_error(db):
    test_create_skill(db)
    response = skill_crud.update_skill(db, 2, {
        "skill_name": "Java",
        "category": "Development"
    })
    print(response)
    assert response is None


def test_delete_skill(db):
    test_create_skill(db)
    response = skill_crud.delete_skill(db, 1)
    assert response == 1


def test_delete_skill_error(db):
    test_create_skill(db)
    response = skill_crud.delete_skill(db, 2)
    assert response is None
