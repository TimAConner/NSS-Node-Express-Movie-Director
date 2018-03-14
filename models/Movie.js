const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports.getAll = () => new Promise((resolve, reject) => {
    db.all(`SELECT m.*, d.name AS director
    FROM movies m
    JOIN directors d ON m.director_id = d.dir_id`, (err, movies) => {
            err ? reject(err) : resolve(movies);
        });
});

module.exports.getMovie = name => new Promise((resolve, reject) => {
    db.get(`SELECT m.*, d.name AS director
    FROM movies m
    JOIN directors d ON m.director_id = d.dir_id
    WHERE m.name = "${name}";`, (err, selectedMovie) => {
            err ? reject(err) : resolve(selectedMovie);
        });
});