const mysql = require('mysql2');

// Δημιουργία σύνδεσης με τη βάση δεδομένων MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Ανάλογα με τη διεύθυνση του MySQL server
  user: 'alumnimemo', // Το όνομα χρήστη της βάσης δεδομένων
  password: '', // Ο κωδικός πρόσβασης της βάσης δεδομένων
  database: 'your_database' // Το όνομα της βάσης δεδομένων που θέλετε να συνδεθείτε
});

// Δοκιμαστική ερώτηση προς τη βάση δεδομένων
connection.query(
  'SELECT * FROM your_table', // Αντικαταστήστε το your_table με το όνομα του πίνακα που θέλετε να επιλέξετε
  function(err, results, fields) {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
    console.log('Query result:', results);
  }
);

// Κλείσιμο της σύνδεσης με τη βάση δεδομένων MySQL μετά την ολοκλήρωση των ερωτημάτων
connection.end();
