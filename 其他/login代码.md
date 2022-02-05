```vue
<template>
  <div id="login">
    <span>
      <router-link to="/">主页面</router-link>
    </span>
    <div class="container">
      <link
        href="https://cdn.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.4/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <form class="form-signin">
        <h2 class="form-signin-heading">请登陆</h2>
        <label for="inputEmail" class="sr-only">Account</label>
        <input
          type="email"
          v-model="account"
          id="inputEmail"
          class="form-control"
          placeholder="Account"
          required
          autofocus
          autocomplete="off"
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          v-model="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign in</button>
      </form>
      <!-- <div>{{this.$router.currentRoute.path}}</div> 这是当前的路由路径 -->
    </div>
    <!-- /container -->
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ins: [],
      account: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$axios({
        method: "POST",
        url: "/user/login",
        data: {
          username: this.account,
          password: this.password,
          lossTime: 100,
        },
        headers: {
          "X-Rust-AuthToken": "",
          "X-Rust-RequestId": "",
        },
      })
        // this.$axios.get('/Rust/test')
        .then((response) => {
          if (response.data) {
            this.ins = response.data.data;
            this.$message({
              showClose: true,
              message: "登录成功",
              type: "success",
            });
            var mytoken = JSON.stringify(response.headers["x-rust-authtoken"]);
            var myrequestid = JSON.stringify(
              response.headers["x-rust-requestid"]
            );
            sessionStorage.setItem("token", mytoken);
            sessionStorage.setItem("requestid", myrequestid);
            // localStorage.setItem()
            //通过则跳转
            // this.$router.push({path : '/'})
          }
        })
        .catch((err) => {
          if (err.response.data.code == 403) {
            this.$message({
              showClose: true,
              message: err.response.data.msg,
              type: "error",
            });
          }
        });
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 150px;
}
.btn-primary {
  background-color: rgb(245, 178, 189);
}
.btn-primary:hover {
  background-color: rgb(199, 39, 65);
}
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-control {
  border-radius: 18px 18px 18px 18px;
}
#inputPassword {
  border-radius: 18px 18px 18px 18px;
}
</style>>


```





```
<template>
  <div id="login">
    <span>
      <router-link to="/">主页面</router-link>
    </span>
    <div id="container">
      <h2>请登录</h2>
      <el-form>
        <el-form-item>
          <input
            v-model="account"
            type="text"
            class="form-control"
            placeholder="  Account"
            required
            autofocus
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <input
            v-model="password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="  Password"
            required
          />
        </el-form-item>
        <button class="btn-primary" type="submit" @click="login">Sign in</button>
      </el-form>
    </div>
    <!-- /container -->
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ins: [],
      account: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$axios({
        method: "POST",
        url: "/user/login",
        data: {
          username: this.account,
          password: this.password,
          lossTime: 100,
        },
        headers: {
          "X-Rust-AuthToken": "",
          "X-Rust-RequestId": "",
        },
      })
        // this.$axios.get('/Rust/test')
        .then((response) => {
          if (response.data) {
            this.ins = response.data.data;
            this.$message({
              showClose: true,
              message: "登录成功",
              type: "success",
            });
            var mytoken = JSON.stringify(response.headers["x-rust-authtoken"]);
            var myrequestid = JSON.stringify(
              response.headers["x-rust-requestid"]
            );
            sessionStorage.setItem("token", mytoken);
            sessionStorage.setItem("requestid", myrequestid);
            // localStorage.setItem()
            //通过则跳转
            // this.$router.push({path : '/'})
          }
        })
        .catch((err) => {
          if (err.response.data.code == 403) {
            this.$message({
              showClose: true,
              message: err.response.data.msg,
              type: "error",
            });
          }
        });
    },
  },
};
</script>

<style scoped>
#newlogin {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#container {
  margin: auto;
  margin-top: 200px;
  width: 400px;
}
input {
  margin: -1px;
  border: 1px solid #ccc;
  font-size: 16px;
  height: 44px;
  width: 300px;
  border-radius: 18px 18px 18px 18px;
  font-size: 16px;
}
h2 {
  font-size: 30px;
}
.btn-primary {
  height: 46px;
  width: 300px;
  background-color: rgb(245, 178, 189);
  border: 1px solid rgb(22, 22, 22);
  border-radius: 6px;
  font-size: 16px;
  color: aliceblue;
}
.btn-primary:hover {
  background-color: rgb(199, 39, 65);
}
</style>


```





```
   //使用三目运算符来控制是否展示 实际上是控制虚拟Dom的展示
   //
   {/* {showContent ? (
        <>
          <RightCompNameFn compname="Table1"></RightCompNameFn>
          <RightFlodPanelFn flodname="基础">
            <RightFlodPanelBasic></RightFlodPanelBasic>
          </RightFlodPanelFn>
          <RightFlodPanelFn flodname="表格">
            <RightPanelForm></RightPanelForm>
          </RightFlodPanelFn>
        </>
      ) : (
        <>Insert</>
      )} */}
```













