import * as mysql from "mysql";
import { config } from "../util";

var pool = mysql.createPool({
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
});

interface queryResult {
  state: number;
  results: any;
  fields: any;
  error: any;
  msg: string;
}
export function query(command: string, value?: Array<any>) {
  const result: queryResult = {
    state: 0,
    results: null,
    fields: null,
    error: null,
    msg: "",
  };
  return new Promise<queryResult>((resolve, reject) => {
    pool.getConnection((error: mysql.MysqlError, connection) => {
      if (error) {
        result.error = error;
        result.msg = "数据库连接出错";
        resolve(result);
      } else {
        const callback: mysql.queryCallback | null = (
          error: mysql.MysqlError | null,
          results,
          fields
        ) => {
          connection.release();
          if (error) {
            result.error = error;
            result.msg = "数据库增删改查出错";
            resolve(result);
          } else {
            result.state = 1;
            result.msg = "ok";
            result.results = results;
            result.fields = fields;
            resolve(result);
          }
        };

        if (value) {
          pool.query(command, value, callback);
        } else {
          pool.query(command, callback);
        }
      }
    });
  });
}
