const pg = require('pg'); // pg is a Node.js module for interacting with PostgreSQL databases

const client = new pg.Client(require('./database_config'));

exports.query = function(queryString, callback) {
    pg.connect(this.url, (err, client, done) => {
        if (err) {
            done();
            return callback(err);
        }

        client.query(queryString, (err, result) => {
            callback(err, result);
            done();
        });
    });
};

// function Database(url, config) {
//     this.url = url;
//     this.config = config;
// };

// Database.prototype.query = function(queryString, callback) {
//     pg.connect(this.url, (err, client, done) => {
//         if (err) {
//             done();
//             return callback(err);
//         }

//         client.query.apply(queryString, (err, result) => {
//             callback(err, result);
//             done();
//         });
//     });
// };

// module.exports = Database;