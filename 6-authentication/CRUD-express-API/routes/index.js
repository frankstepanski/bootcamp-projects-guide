const { Router } = require('express');

const apiRouter = Router();

// An example route that the client requests to check if the app is healthy.
apiRouter.get('/health', (req, res) => {
    res.send({
      message: 'Application is awake and healthy',
    });
});

// TODO: Does your api want more routes? Why not here?

module.exports = apiRouter;