# Survey-App
# About

This Project is an Application Programming Interface for a company secured survey server that allows an admin to roll out surveys . This include routes for User  can create an account, and admin priviledges on the creation of the survey and retrieval of the survey responses while the user access the response.
# Content

- Installation
- Documentation
- Deployment
- Built-With
    - Reasons for choosing mongodb as database system
- Additions

# Installation
- Visit the github respository [github respository link](https://github.com/Beloved1310/Survey-App)
- Clone the application programming interface to your Desktop from github.

  > navigate to the **_code_** button on the repository.

  > copy the link and clone using the command _git clone repository url_

  > or using github desktop

  > or download to your local desktop.

- Open the code using any code editor.

- On terminal

```
$ npm install
```

- Provide the environment variables as specify in the `config.js` file
# Documentation

The Project is well documented on Postman. The Publication link is [Survey-App Postman link](https://documenter.getpostman.com/view/15034996/2s8YzQX4Hj)

# Deployment

The Project live deployment is [Survey-App deployment link](https://adefisayo-enterscale-test.vercel.app/). Use the documentation to know the routes for easy navigation.

 
# Built-With

The Api is built with Node.js, Json WebToken, MongoDB database to store information into the database. In addition, Json WEb Token to sign user information to accesss wallet functionality. The Application Environment Variable to implement funtionality while building the project are:


- Environment Variable Names
  - MONGODBURI : to connect to  an instance of mongodb url connection for database
  - JWT_KEY : to authenticate users

### Reasons for mongodb database?
The main reason for this project is to create flexible schemma relation between the user, survey and survey response respectively. The different schemma relationship can offer scalability in a unlimited way. To offer good definition  and relationship of schemma 
# Additions

This service can be intergrated in a survey application and the application can be scaled to include other funtionality