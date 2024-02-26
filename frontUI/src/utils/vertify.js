export default {
  /**
   * 对传入的对象进行校验,需要都不为空才返回true
   * @param object
   */
  verify(object) {
    let flag = true;
    for (let key in object) {
      console.log("object[key]:");
      console.log(object[key]);
      if ((object[key] + "").length === 0) {
        flag = false;
        console.log("有空值");
        break;
      }
      return flag;
    }
  }
};