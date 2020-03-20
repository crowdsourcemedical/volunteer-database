from rest_framework import mixins, generics, permissions


class getUsers(generics.ListAPIView):
    """
    List all users, should be able to filter by skill with a query param
    """
    pass

class UserDetail(generics.RetrieveApiView):
    """
    Should list a certain's user skills and description. Dont show the name and location for privacy reasons
    """
    pass
