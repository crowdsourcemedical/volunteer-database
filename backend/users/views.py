from rest_framework import mixins, generics, permissions
from django.contrib.auth.models import User
from myapp.serializers import UserSerializer


class getUsers(generics.ListAPIView):
    """
    List all users, should be able to filter by skill with a query param
    """
    queryset = Users.list.all()
    serial = UserSerializer
    
    def listAll(self, skill='none', request):
        """
        returns a list of all users, if there is a skill defined then only users with that skill will be returned
        """
        queryset = self.get_queryset()
        serial = UserSerializer(queryset)
        userList = Response(serial.data) #Gets a list of User objects from the serializer
        if skill = 'none':  #Checks the optional skill filter
            return userList
        else:
            output = []
            for user in UserList: #Loops through all users to find the ones with the skill requested for and only returns thouse
                if user.skill = skill:
                    output.append(user)
            return output
    
class userDetail(generics.RetrieveAPIView):
    """
    Should list a certain's user skills and description. Dont show the name and location for privacy reasons
    """
    pass
