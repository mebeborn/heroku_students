const express = require('express');
const bodyParser = require('body-parser');
// const http = require('http');

const config = require('./config');
const apiRouter = require('./router/api');
const apiRouterV2 = require('./router/apiv2');


const { hostname, port } = config;


const app = express();
// const server = http.Server(app);
// console.log(server);

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ 
  extended: false 
}));
app.use(bodyParser.json())

app.use('/api', apiRouter);
app.use('/api/v2', apiRouterV2);

app.listen(port,  () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
