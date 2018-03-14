const { Router } = require('express');
const dirRouter = Router();
const { getDirectors, getDirector} = require('../controllers/directorCtrl');

dirRouter.get('/directors', getDirectors);
dirRouter.get('/directors/:directorName', getDirector);

module.exports = dirRouter;