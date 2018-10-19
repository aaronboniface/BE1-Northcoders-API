const http = require('http'); 
const usernameURL = /\/api\/northcoders\/\w+$/gm;
const petsURL = /\/api\/pets\/\w+$/gm;
const interestsURL = /\/api\/interests\/\w+$/gm;
const {getNorthcoders, getSpecificNorthcoder} = require('./controllers/northcoders');
const {getCoderInterests} = require('./controllers/interests');
const {getCoderPets} = require('./controllers/pets');

const server = http.createServer((request, response) => {
  const url = request.url.split('?')[0];
  if (url === '/api') {
    if (request.method === 'GET') {
      response.setHeader('Content-Type', 'application/JSON');
      response.statusCode = 200;
      response.write(JSON.stringify('Hi'));
      response.end();
    } else {

    }
  } else if (url === '/api/northcoders') {
    if (request.method === 'GET') {
      getNorthcoders(response);
    } else {

    }
  } else if (usernameURL.test(url)) {
    if (request.method === 'GET') {
      const usernameArr = url.match(/\w+$/gm);
      const userName = usernameArr[0];
      getSpecificNorthcoder(response, userName)
    } else {

    }
  } else if (petsURL.test(url)) {
    if (request.method === 'GET') {
      const usernameArr = url.match(/\w+$/gm);
      const userName = usernameArr[0];
      getCoderPets(response, userName);
    } else {

    }
  } else if (interestsURL.test(url)) {
    if (request.method === 'GET') {
      const usernameArr = url.match(/\w+$/gm);
      const userName = usernameArr[0];
      getCoderInterests(response, userName);
    } else {

    }
  }
})

server.listen(9090);