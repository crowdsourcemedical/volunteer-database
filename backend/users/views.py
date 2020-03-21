from rest_framework import mixins, generics, permissions
from django.contrib.auth import get_user_model 
from .serializers import UserSerializer

Users = get_user_model()
class getUsers(generics.ListAPIView):
    """
    List all users, should be able to filter by skill with a query param
    """

    queryset = Users.objects.all()
    serial = UserSerializer
    
    def listAll(self, request):
        """
        returns a list of all users, if there is a skill defined then only users with that skill will be returned
        """
        # Skill should be retrieved from query string
        skill = request.GET.get('skill',None) #if you want to return all, filter should be set to none
        queryset = self.get_queryset()
        serial = UserSerializer(queryset)
        userList = Response(serial.data) #Gets a list of User objects from the serializer
        if skill == None:  #Checks the optional skill filter
            return userList
        else:
            output = []
            for user in UserList: #Loops through all users to find the ones with the skill requested for and only returns thouse
                if user.skill == skill:
                    output.append(user)
            return output
    
class userDetail(generics.RetrieveAPIView):
    """
    Should list a certain's user skills and description. Dont show the name and location for privacy reasons
    """
    
    queryset = Users.objects.all()
    serial = UserSerializer
    
    def getSpecificUserDetails(self, request):
        """Searches through the list of users to find one with a specific name"""
        username = request.GET.get('username') #gets the username to find the user
       # queryset = self.get_queryset()      I dont even think we ned to serialize here
       # serial = UserSerializer(queryset)
       # userList = Response(serial.data)   #Gets all users from serializer
        try: #to catch when there isnt a user with the name
            user = Users.objects.get(USERNAME_FIELD=username)    #Finds the specified user and returns skill and description
            return [user.skill, user.description]
