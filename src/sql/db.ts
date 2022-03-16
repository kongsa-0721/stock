import mysql from "mysql";
import config from "../util/config";

var pool = mysql.createPool({
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
});

function query(
  sql: string | mysql.QueryOptions,
  callback: (err: mysql.MysqlError, values: any) => void
) {
  pool.getConnection(function (
    err: mysql.MysqlError,
    connection: mysql.PoolConnection
  ) {
    connection.query(sql, function (err: mysql.MysqlError, values: any) {
      callback(err, values);
      connection.release();
    });
  });
}
export default query;
