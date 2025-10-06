// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',       // o el host de tu servidor
    user: 'root',
    password: '123456',
    database: 'iberoildatabase_pruebas'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión a MySQL exitosa');
});

module.exports = connection;