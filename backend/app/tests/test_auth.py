from ..auth import create_access_token, decode_token


def test_create_access_token(unsaved_user):
    token = create_access_token(data=unsaved_user)
    # JWTs have 3 sections, separated by periods
    assert str(token).count(".") == 2


def test_decode_token(db, unsaved_user):
    db.add(unsaved_user)
    db.commit()
    db.refresh(unsaved_user)
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.64UPPFUArvNwhWvaTHOMuFwBIlWmZr2Bwh8l-5zr9Sg"
    decoded_user = decode_token(token, db)
    assert decoded_user.user_id == unsaved_user.user_id == 1
