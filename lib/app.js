// const Database = require('./database.js');

// const db = new Database('postgres://localhost/my_database');


// Notice that there's no configuration or initialization
// happening here -- we just jump straight to the query.


const db = require('./database');

db.query('select * from foo where foo.bar = 1', (err, result) => {
  if (err) {
    return console.error(err)
  }

  console.log('result: ', result)
})
