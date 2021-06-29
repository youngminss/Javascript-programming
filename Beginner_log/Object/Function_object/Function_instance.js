// ===== new Function() =====
var obj = new Function("one", "two", "return one + two;");
console.log(obj(100, 200));
// 300
/**
 * Function 인스턴스를 만드는 순간부터 obj는 Function 오브젝트이다. 즉 함수다.
 */

// ===== 파라미터 하나 작성경우 =====
var obj = new Function("return 1 + 2;");
console.log(obj());
// 3
