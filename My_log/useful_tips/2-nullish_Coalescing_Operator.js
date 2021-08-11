{
  /**
   * Nullish Coalescing Operator
   * [형식]
   * leftExpr ?? rightExpr
   *
   * - leftExpr(왼쪽 "표현식") 이 [null,undefined] 이면 => rightExpr(오른쪽 "표현식") 이 실행, 아니면 왼쪽 표현식 사용	💡
   */

  // Bad 💩
  function printMessage1(text) {
    let message = text;
    if (text == null || text == undefined) {
      message = "Nothing";
    }
    console.log(message);
  }
  printMessage1("hello"); // hello
  printMessage1(undefined); // Nothing
  printMessage1(null); // Nothing
  console.clear();

  // Good 👍
  function printMessage2(text) {
    let message = text ?? "Nothing";
    console.log(message);
  }
  printMessage2("hello"); // hello
  printMessage2(undefined); // Nothing
  printMessage2(null); // Nothing
  console.clear();

  /**
   * Nullish Coalescing Operator 과 Default Parameter 차이점 🔍
   * - Nullish Coalescing Operator 는 undefined, null 모두 해당된다.
   * - Default Parameter 는 undefined 만 해당된다. 💡
   */

  function printMessage3(text = "Nothing") {
    console.log(text);
  }

  printMessage3("hello"); // hello
  printMessage3(undefined); // Nothing
  printMessage3(null); // null 🔍
  console.clear();

  /**
   * Logical OR Operator
   * [형식]
   * eftExpr || rightExpr
   *
   * - leftExpr(왼쪽 "표현식") 이 false 이면 => rightExpr(오른쪽 "표현식") 이 실행	💡
   * - 여기서 false 에 해당하는 것	🔍
   *   + null
   *   + undefined
   *   + 0, -0
   *   + '', "", ``
   *   + false
   *   + NaN
   */
  function printMessage4(text) {
    let message = text || "Nothing";
    console.log(message);
  }
  printMessage4("hello"); // hello
  printMessage4(undefined); // Nothing
  printMessage4(null); // Nothing
  printMessage4(0); // Nothing 🔍
  printMessage4(""); // Nothing 🔍
  printMessage4(false); // Nothing 🔍
  console.clear();

  /**
   * leftExpr 나 rightExpr 에서 "Expression"
   * - 값을 직접 할당하지 않아도, 함수 같은 코드를 실행한 결과를 받아내기도 한다.
   */
  function getNullValue() {
    return null;
  }
  function getNullishAndNothing() {
    return "Nothing";
  }
  const result = getNullValue() ?? getNullishAndNothing();
  console.log(result); // Nothing
}
