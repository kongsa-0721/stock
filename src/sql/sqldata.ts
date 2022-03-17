import { query } from "./db";

interface Iuser {
  id: string;
  username: string;
  password: string;
  phone: string;
}
var arr: Array<Iuser> = [
  { id: "", username: "kongsa", password: "123456", phone: "15246795875" },
  { id: "", username: "chuandan", password: "123456", phone: "15246795875" },
];
class Api {
  static Insert() {
    arr.map((val: Iuser) => {
      let sql = `insert into user values (null,'${val.username}','${val.password}','${val.phone}')`;
      query(sql);
    });
  }
  static async Login(username: string) {
    let sql = `select * from user where username = '${username}'`;
    const res = await query(sql);
    return res;
  }
}

export default Api;
