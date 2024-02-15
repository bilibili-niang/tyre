export default {
  /**
   * 对传入的对象进行校验,需要都不为空才返回true
   * @param object
   */
   verify(object) {
     let flag = true;
     for (let key in object) {
       if (object[key] === '') {
         flag = false;
         break;
       }
     }
  }
}