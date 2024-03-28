
const mysql = require('mysql');

// Configure your database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yourUsername',
    password: 'yourPassword',
    database: 'yourDatabaseName'
});

connection.connect(error => {
    if (error) {
        console.error('Error connecting to the database: ' + error.stack);
        return;
    }

    console.log('Connected to the database with thread ID: ' + connection.threadId);
});

module.exports = connection;
