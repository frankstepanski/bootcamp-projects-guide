const chalk = require('chalk');
const app = require('./server');

const { composeMiddleware, standardMiddleware } = require('./middleware');

app.use('/routes', apiRouter);