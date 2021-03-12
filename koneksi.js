var mySql = require('mysql');

// Buat Koneksi DataBase
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mahasiswa'
});

conn.connect ((err) => {
    if(err) throw err;
    console.log('Mysql terkoneksi');
})

module.exports = conn;