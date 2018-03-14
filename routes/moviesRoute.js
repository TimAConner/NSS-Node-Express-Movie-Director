const { Router } = require('express');
const movieRouter = Router();
const { getMovies, getMovie } = require('../controllers/movieCtrl');

movieRouter.get('/movies', getMovies);
movieRouter.get('/movies/:movieName', getMovie);

module.exports = movieRouter;