import mysql from "mysql2/promise";

export function createPool() {
  return mysql.createConnection({
    host: "35.168.86.77",
    user: "apirest",
    password: "password",
    port: 3306,
    database: "Prueba",
  })
};
