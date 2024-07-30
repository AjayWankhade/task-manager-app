import mysql from "mysql2/promise";

//my database configurations

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1681997",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
