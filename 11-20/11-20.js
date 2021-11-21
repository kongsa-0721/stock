//深拷贝
let obj = {
  name: "kongsa",
  info: {
    study: "web",
  },
  arr: [1, 2, 3, 4],
};
let obj1 = {};
function deep(target, newobj) {
  for (let i in target) {
    let item = target[i];
    if (item instanceof Array) {
      newobj[i] = [];
      deep(item, newobj[i]);
    } else if (item instanceof Object) {
      newobj[i] = {};
      deep(item, newobj[i]);
    } else {
      newobj[i] = item;
    }
  }
  return newobj;
}
console.log(deep(obj, obj1));
//防抖节流
var btn = document.getElementsByTagName("input")[0];
btn.addEventListener("click", save(fn));
function fn() {
  console.log("aaa");
}
function submit(fn) {
  var t = null;
  return function () {
    if (t) {
      clearTimeout(t);
    }
    if (!t) {
      fn.apply(this, arguments);
    }
    t = setTimeout(() => {
      t = null;
    }, 1000);
  };
}
function save(obj) {
  var begin = 0;
  return function () {
    let cur = new Date().getTime();
    if (cur - begin > 1000) {
      obj.apply(this, arguments);
      begin = cur;
    }
  };
}
