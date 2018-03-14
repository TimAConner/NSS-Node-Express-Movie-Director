const { getAll, getMovie } = require('../models/Movie');

module.exports.getMovies = (req, res, next) => {
    getAll()
        .then(movies => {
            res.status(200).json(movies);
        })
        .catch(err => {
            next(err)
        });
};

module.exports.getMovie = (req, res, next) => {
    getMovie(req.params.movieName)
        .then(movie => {
            res.status(200).json(movie);
        })
        .catch(err => next(err));
};