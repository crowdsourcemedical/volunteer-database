def test_root(testclient):
    response = testclient.get('/')
    assert response.status_code == 200
