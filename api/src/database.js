const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '30611972',
    connectionLimit: 5,
    database: 'sellyourart'

})

module.exports = pool