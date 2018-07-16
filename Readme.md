## Node.js Rest api
________________________


#### config

```shell
Put your all config varibale related to db etc here
./config/index.js
```

#### steps to run program

```shell
npm install
npm start
http://localhost:3000
```

### End Points

```
POST http://localhost:3000/api/v1/users
GET http://localhost:3000/api/v1/users/1
PUT http://localhost:3000/api/v1/users/1
DEL http://localhost:3000/api/v1/users/1

```

## Schema 

### User
```
{
	"email": "mabc224@gmail.com",
	"password": "some_password"
}
```


### About Project

This project is built using node.js with express.js framework, mysql database using sequelize.

```


POST /users/
It will create new user in database.

GET /users/:id
It will fetch a user by id from database.

DELETE /users/:id
It will remove a given user by id from database.

PUT /users/:id
It will update a user by id in database.

```

#### Backend

Backend use node.js with express.js framework.
Routing has functionality for changing route quickly with with quick option to change api version
 
	|-- ./
    ├── Readme.md
    ├── app.js
    ├── bin
    |  └── www
    ├── config
    |  ├── appConfig.js
    |  └── index.js
    ├── models
    |  ├── index.js
    |  └── user.js
    ├── package-lock.json
    ├── package.json
    ├── pm2-dev.json
    ├── pm2-prod.json
    ├── routes
    |  ├── index.js
    |  └── v1
    |     ├── controller
    |     |  └── user.controller.js
    |     ├── users.routes.js
    |     └── validator
    |        └── user.validator.js
    ├── test
    |  └── user.test.js
    └── test-task-rest-API.postman_collection


### Async/Await
 This application uses Async/Await. In order to use it as intended, you need at least Node v7.6.

### Testing

Postman collection is added for testing in local system

 ### External References and Resources 

* [Node.js API](https://nodejs.org/api/index.html)
* [Node.js ES2015/ES6, ES2016 and ES2017 support](http://node.green/)
