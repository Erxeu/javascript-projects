# How to use
> Download .zip or clone this repository
# Enter on project folder
> Type `npm i` on terminal for install dependencies
> create new file `database.db` 
> Type `npx sequelize-cli db:migrate` on terminal for migrate models to database
> Type npm start on terminal for start server.js


### Routes on http://localhost:8080
#### GET
> `/user` get all user
> `/user/auth` authenticate user
> `/user/:id` get user by id
### POST
> `/user` create new user
### PUT
> `/user/changepass` change user password
> `/user/:id` update user informations
### DELETE
> `/user/:id` delete user by id