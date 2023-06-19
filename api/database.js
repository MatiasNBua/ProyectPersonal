const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '30611972',
    connectionLimit: 5,
    database: 'sellyourart'

})

exports.getUser = async function () {
    let conn
    try {
        conn = await pool.getConnection()

        const rows = await conn.query("SELECT * FROM user")

        return rows

    } catch (err) {

        throw err

    } finally {

        if (conn) conn.end()
    }
}

exports.addUser = async function (params) {
    let conn

    let { name, email, aniversary, password, phone_number ,favorites} = params
    
    try {
        conn = await pool.getConnection()

        const res = await conn.query("INSERT INTO user (name, email, aniversary, password, phone_number, favorites) VALUES (?,?,?,?,?,?)", [name, email, aniversary, password, phone_number, favorites])

        return {id_user: parseInt(res.insertId)}

    } catch (err) {

        throw err

    } finally {

        if (conn) conn.end()
    }
}

exports.updateUser = async function (id_user , params) {
    let conn

    let { password, newPassword } = params

    try {
        conn = await pool.getConnection()

        const res = await conn.query("UPDATE user SET password=?, newPassword=? WHERE id_user=? ", [password, newPassword, id_user])
        
        return {affected: parseInt(res.affectedRows)}

    } catch (err) {
        throw err

    } finally {

        if (conn) conn.end()
    }

}