const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'alumnimemo', 
  password: '', 
  database: 'your_database' 
});


connection.query(
  'SELECT * FROM your_table', 
  function(err, results, fields) {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
    console.log('Query result:', results);
  }
);

connection.end();
