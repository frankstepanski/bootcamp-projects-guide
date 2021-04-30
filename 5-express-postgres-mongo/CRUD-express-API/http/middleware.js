const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('bodyparser');

// A way to pass in a parameter in a .env file.
const whiteListedUrl = process.env.WHITELISTED_URL || '*';

// Allow CORS - this enables us to let other client applications not served from the same port communicate with us. 
// note: instead of installing cors package
const customCORSMiddleware = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', whiteListedUrl);
    res.set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.set('Vary', 'Origin');
  
    next();
};

const customParserMiddleware = ()

  server.use(morgan('dev'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));
  server.use(express.json());
  
  server.use((req, res, next) => {
      console.log("<----Body Logger START---->");
      console.log(req.body);
      console.log("<----Body Logger END---->");  
      next();
  });


// TODO: You could add any middleware into here.
// Combine all the middleware in an array.
const standardMiddleware = [
    express.json(),
    customCORSMiddleware,
    
  ];