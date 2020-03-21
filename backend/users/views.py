from requests import Response
from rest_framework import mixins, generics, permissions
from django.contrib.auth import get_user_model 
from .serializers import UserSerializer

Users = get_user_model()


class GetUsers(generics.ListAPIView):
    """
    List all users, should be able to filter by skill with a query param
    """

    queryset = Users.objects.all()
    serial = UserSerializer
    
    def list_all(self, request):
        """
        returns a list of all users, if there is a skill defined then only users with that skill will be returned
        """
        # Skill should be retrieved from query string
        skill = None
        queryset = self.get_queryset()
        serial = UserSerializer(queryset)
        user_list = Response(serial.data)  # Gets a list of User objects from the serializer
        if skill == 'none':  # Checks the optional skill filter
            return user_list
        else:
            output = []
            for user in user_list:  #Loops through all users to find the ones with the skill requested for and only returns those
                if user.skill == skill:
                    output.append(user)
            return output


class UserDetail(generics.RetrieveAPIView):
    """
    Should list a certain's user skills and description. Dont show the name and location for privacy reasons
    """
    pass
