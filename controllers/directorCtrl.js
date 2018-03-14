const { getAll, getDirector } = require('../models/Director');

module.exports.getDirectors = (req, res, next) => {
    getAll()
        .then(directors => {
            res.status(200).json(directors);
        })
        .catch(err => next(err));
};

module.exports.getDirector = (req, res, next) => {
    getDirector(req.params.directorName)
        .then(director => {
            res.status(200).json(director);
        })
        .catch(err => next(err));
};