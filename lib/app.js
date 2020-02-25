const Database = require('./database.js');
 
const db = require('./database');
 
db.query('select * from foo where foo.bar = 1', (err, result) => {
  if (err) {
    return console.error(err);
  }
 
  console.log(result);
});