# CoRe4-node
# CoRe4-node

Creating a REST API with authentication
-Storing Users in the databse
-Hashing User passwords
-Using JSON web tokens for Login authentication & authorization
-Private Routes - Require authorization for access

Packages used
Express
Mongoose
Joi
bcrypt
jsonwebtoken
dotenv
nodemon

File structure
app.js
Routes
    Auth
    Index
Models
    User
    Book
Public
    index.html
    index.css
verifyToken.js
validation.js
.env
.gitignore
package.json
package-lock.json
README.md


Create User model for use in adding users to database, & login
Create Route for registering users
Provide User Data validation;- using 'joi'
Register user once; by checking if email already exists
Protect user password, by hashing it; using 'bcrypt'
Save user
Create a Route for user login 
Add a JWT; little token that remembers that you are logged in.;- using jsonwebtoken
Create a token verifiation function for use in private routes
Create private routes & access;- login user, get token, add token in header; auth-token , give it value of the logged in user
