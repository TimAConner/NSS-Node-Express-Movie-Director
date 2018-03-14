const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports.getAll = () => new Promise((resolve, reject) => {
    db.all(`SELECT * FROM directors`, (err, selectedDirectors) => {
        err ? reject(err) : resolve(selectedDirectors);
    });
});

module.exports.getDirector = name => new Promise((resolve, reject) => {
    db.get(`SELECT * FROM directors WHERE name="${name}"`, (err, selectedDirector) => {
        err ? reject(err) : resolve(selectedDirector);
    });
});