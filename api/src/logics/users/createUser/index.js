const pool = require('../../database');

async function createUser(name, email, aniversary, password, phone_number, favorites) {
  const conn = await pool.getConnection();

  try {
    // Verificar si el usuario ya existe
    const existingUser = await conn.query('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUser.length > 0) {
      throw new Error('El nombre de usuario ya existe');
    }

    // Insertar el nuevo usuario en la base de datos
    await conn.query(
      "INSERT INTO user (name, email, aniversary, password, phone_number, favorites) VALUES (?,?,?,?,?,?)",
      [name, email, aniversary, password, phone_number, favorites]
    );
  } finally {
    conn.release();
  }
}

module.exports = createUser;
