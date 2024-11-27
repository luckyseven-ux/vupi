import pool from "../../infrastructure/db/dbconfig.js";
import bcrypt from "bcrypt"
// Menyimpan user baru dengan password terenkripsi
export const registerUser = async (req, res) => {
  const { name, email, address, tempat_lahir, tgl_lahir, pekerjaan, pendidikan, password } = req.body;

  try {
    // Enkripsi password menggunakan bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert data ke database
    const query = `
      INSERT INTO users (name, email, address, tempat_lahir, tgl_lahir, pekerjaan, pendidikan, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id, name, email, address, tempat_lahir, tgl_lahir, pekerjaan, pendidikan, created_at
    `;
    const values = [name, email, address, tempat_lahir, tgl_lahir, pekerjaan, pendidikan, hashedPassword];
    
    const result = await pool.query(query, values);
    const newUser = result.rows[0];

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Mengambil data semua pengguna
export const getUsers = async (req, res) => {
  try {
    const query = 'SELECT id, name, email, address, tempat_lahir, tgl_lahir, pekerjaan, pendidikan, created_at FROM users';
    const result = await pool.query(query);
    res.status(200).json({ users: result.rows });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Memperbarui data pengguna
export const updateUser = async (req, res) => {
  const { id } = req.params; // Mendapatkan ID pengguna dari URL parameter
  const { name, email, address, tempat_lahir, tgl_lahir, pekerjaan, pendidikan, password } = req.body;

  try {
    // Jika password diberikan, enkripsi terlebih dahulu
    let updatedPassword = null;
    if (password) {
      const saltRounds = 10;
      updatedPassword = await bcrypt.hash(password, saltRounds);
    }

    // Update data pengguna
    const query = `
      UPDATE users
      SET name = $1, email = $2, address = $3, tempat_lahir = $4, tgl_lahir = $5, pekerjaan = $6, pendidikan = $7, password = COALESCE($8, password), updated_at = CURRENT_TIMESTAMP
      WHERE id = $9
      RETURNING id, name, email, address, tempat_lahir, tgl_lahir, pekerjaan, pendidikan, updated_at
    `;
    const values = [name, email, address, tempat_lahir, tgl_lahir, pekerjaan, pendidikan, updatedPassword, id];
    
    const result = await pool.query(query, values);
    const updatedUser = result.rows[0];

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user' });
  }
};
