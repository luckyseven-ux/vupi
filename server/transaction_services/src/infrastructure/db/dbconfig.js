import pkg from 'pg';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Konfigurasi koneksi database
const { Pool } = pkg; // Destructure to get the Pool class

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Fungsi untuk uji koneksi
pool.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
  } else {
    console.log("Connected to the PostgreSQL database!");
  }
});

export default pool;
