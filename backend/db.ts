import mysql, { Pool, PoolConnection } from "mysql2";

var dbPool: Pool;

function initDbPool() {
  dbPool = mysql.createPool({
    host: 'bgxv1btarrtblwjmczyz-mysql.services.clever-cloud.com',
    user: 'ufn6zmwsnkv1oj1a',
    password: 'NNDgC2fkBSqdbU2NsrlE',
    database: 'bgxv1btarrtblwjmczyz',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
  });
}

function getDbConnection(): Promise<PoolConnection> {
  return new Promise((resolve, reject) => {
    if (!dbPool) {
      return reject(new Error("Database pool is not initialized."));
    }
    dbPool.getConnection((err, connection) => {
      if (err) reject(err);
      else resolve(connection);
    });
  });
}

export { initDbPool, getDbConnection };