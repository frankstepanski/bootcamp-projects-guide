const dotenv = require('dotenv');
const chalk = require('chalk');

// Load in any configuration keys from a .env file
dotenv.config();


const startServer = require('./http/index');

// Grab the env variables for PORT and NODE_ENV
const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === 'production';

startServer(PORT, PROD).then(() => {
  console.log(chalk.cyan(`Application started.`));
});

/*

// images:
server.use('/assets',express.static(path.join(__dirname,'../assets')));

const startServer = new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
      resolve();
    });
});

sync(FORCE)
  .then(() => seed(FORCE))
  .then(startServer)
  .catch((error) => {
    console.error(`SERVER FAILED TO START: ${error.toString()}`);
});

*/