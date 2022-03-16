//对象过滤出想要的
function filterObj(obj: any, arr: Array<any>): any {
  if (typeof obj !== "object" || !Array.isArray(arr)) {
    throw new Error("参数格式不正确");
  }
  const result = {};
  Object.keys(obj)
    .filter((key) => arr.includes(key))
    .forEach((key) => {
      (result as any)[key] = obj[key];
    });
  return result;
}

export { filterObj };
