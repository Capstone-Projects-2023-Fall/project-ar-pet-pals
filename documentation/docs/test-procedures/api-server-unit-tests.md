# API-Server Unit Tests 
## Description
These are a series of unit tests meant for the backend that tests most of the routes on the api-server, and different situations that might occur.

[Code for these unit tests](https://github.com/Capstone-Projects-2023-Fall/project-ar-pet-pals/blob/main/backend/src/unit.tests.ts)
## Tests

### Database connection
- test database connection 
    - Test whether the app can connect to the database

### Verify Token
- verify true token 
    - Test whether or not the token validation works for a valid token

- verify false token 
    - Test whether or not the token validation works for a invalid token


### Authentication 
- valid sign in
    - Test whether or not an already signed up user can sign in
  
- invalid (no password) sign in
    - Test whether a user can sign in with no password 

- invalid (no username) sign in
    - Test whether a user can sign in with no username 

- valid sign up 
    - Test whether or not an new user can sign up

- invalid (no password) sign up 
    - Test whether a user can sign up with no password
 
- invalid (no username) sign up 
    - Test whether a user can sign up with no username
 
- valid create pet
    - Test whether a user can create a new pet

### Create Pet
- invalid token create pet
    - Test whether someone can create a pet with an invalid token

### Pet Name 
- get pet name
    - Test whether or not a user can get his pet's name

- invalid( invalid token) get pet name
    - Test whether or not a user can get his pet's name with an invalid token

- invalid( no pet created) get pet name 
    - Test whether or not a user can get his pet's name without having created a pet

- set pet name
    - Test whether or not a user can set his pet's name 

- invalid ( invalid token) set pet name
    - Test whether or not a user can set his pet's name with an invalid token

- invalid ( no pet created) set pet name
    - Test whether or not a user can set his pet's name without having created a pet

### Pet Status
- get pet status
    - Test whether or not a user can get his pet's health and happiness status

- invalid( invalid token) get pet status
    - Test whether or not a user can get his pet's health and happiness status with an invalid token

- invalid( no pet created) get pet status
  - Test whether or not a user can get his pet's health and happiness status without having created a pet

- set pet status 
    - Test whether or not a user can set his pet's health and happiness status

- invalid ( invalid token) set pet status 
    - Test whether or not a user san get his pet's health and happiness status with an invalid token

- invalid ( no pet created) set pet status 
  - Test whether or not a user can set his pet's health and happiness status without having created a pet

### Pet Choice
- get pet choice 
    - Test whether or not a user can get his pet's choice

- invalid( invalid token) get pet choice 
    - Test whether or not a user can get his pet's choice with an invalid token

- invalid( no pet created) get pet choice 
  - Test whether or not a user can get his pet's choice without having created a pet

- set pet choice
    - Test whether or not a user can set his pet's choice

- invalid ( invalid token) set pet choice
    - Test whether or not a user san set his pet's choice with an invalid token 

- invalid ( no pet created) set pet choice
  - Test whether or not a user can set his pet's choice without having created a pet




### Food recognition
- recognize food in image
    - Test whether or not it can recognize food in an image

- invalid (bad image string) recognize food in image
     - Test whether or not it can recognize food in an image with a bad image string

- invalid (no image string) recognize food in image 
    - Test whether or not it can recognize food in an image with no image string provided

### Food health rating 
- get food's health rating
    - Test whether or not it can get food's health rating

- invalid (no food) get food's health rating
    - Test whether or not it can get food's health rating with no food provided

- invalid (invalid food) get food's health rating
    - Test whether or not it can get food's health rating invalid food provided

### Nutrition Information
- get food's nutrition info
    - Test whether or not a user can get nutrition information

- invalid (no food) get food's nutrition info
    - Test whether or not a user can get nutrition information with no food name provided

- invalid (invalid food) get food's nutrition info 
    - Test whether or not a user can get nutrition information with an invalid food name provided
