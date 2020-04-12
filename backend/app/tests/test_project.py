from .. import project_crud, schemas


def get_mock_payload(mock_title, mock_desc):
    return schemas.ProjectCreate(
        user_id=1,
        project_title=mock_title,
        project_description=mock_desc,
        project_location="Toronto, ON",
        project_is_active=True,
        project_created_on="2020-04-10T19:50:44.834Z",
        project_is_complete=True,
        project_last_active="2020-04-10T19:50:44.834Z",
        project_last_modified="2020-04-10T19:50:44.834Z",
        project_quantity=1
    )


def test_create_project(db):
    name = "Ventilator Project"
    desc = "Building ventilators"
    project_data = get_mock_payload(name, desc)
    response = project_crud.create_project(db, project_data)
    assert response.project_id == 1
    assert response.project_title == name
    assert response.project_description == desc


def test_get_all_project(db):
    test_create_project(db)
    response = project_crud.get_projects(db)
    assert len(response) == 1


def test_get_project_by_id(db):
    test_create_project(db)
    response = project_crud.get_project_by_id(db, 1)
    assert response is not None


def test_update_project(db):
    name = "Mask Project"
    desc = "Creating Masks"
    test_create_project(db)
    project_crud.update_project(db, 1, get_mock_payload(name, desc))
    project = project_crud.get_project_by_id(db, 1)
    assert project is not None
    assert project.project_title == name
    assert project.project_description == desc


def test_update_project_error(db):
    test_create_project(db)
    response = project_crud.update_project(db, 2, get_mock_payload("Test kit project", "Creating test kits"))
    assert response is None


def test_delete_project(db):
    test_create_project(db)
    response = project_crud.delete_project(db, 1)
    assert response == 1


def test_delete_project_error(db):
    test_create_project(db)
    response = project_crud.delete_project(db, 2)
    assert response is None
