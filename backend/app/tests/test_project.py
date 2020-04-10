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
            