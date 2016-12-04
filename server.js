'use strict';

require('babel-register');

const http = require('http');

const express = require('express'),
      React = require('react'),
      ReactDOMServer = require('react-dom/server');

const { match, RouterContext } = require('react-router');

const About = require('./About'),
      routes = require('./Routes.jsx'),
      Team = require('./Team');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use('/', express.static(__dirname));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const html = ReactDOMServer.renderToString(React.createElement(RouterContext, renderProps));

      res.status(200).render('index', { reactOutput: html });
    } else {
      res.status(404).send('Not found')
    }
  });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
