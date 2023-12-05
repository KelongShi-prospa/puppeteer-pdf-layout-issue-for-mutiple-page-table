## How to use:

1. nvm use
2. npm i
3. npm run start

## Get pdf by call the api 
you can call the api endpoint via browser or postman.

+ happy path: `http://localhost:3000/pdf/normal`
  + content length in row is not long, the style is correct.
+ bad path: `http://localhost:3000/pdf/bad`
  + content in row is long, the style is broken.
