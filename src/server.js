'use strict';

const http = require('http');

const express = require('express');
const nunjucks = require('nunjucks');

const conf = require('./config.js');
const routes = require('./routes');

// Setting up express middleware and server
const app = express();
const server = http.Server(app);

// Enables view template compilation caching
// https://expressjs.com/en/api.html#app.set
app.set('view cache', true);

// Configure nunjucks
// https://mozilla.github.io/nunjucks/api.html#configure
nunjucks.configure(conf.viewsDir, {
  autoescape: false,
  express: app,
  // watches and reloads templates that have changed server-side
  // requires chokidar dependency
  watch: true
});

// Adding in routes
app.use(routes);


server.listen(conf.port, function(err, count) {
  if (err) {
    return console.error('SERVER ERROR:', err);
  }
  console.log('SERVING ON PORT', conf.port);
});
