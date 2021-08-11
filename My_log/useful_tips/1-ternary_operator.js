{
  /**
   * 삼항 연산자(Ternary Operator)
   * - 형식
   * 조건식 ? 조건식이 참일경우 : 조건식이 거짓일 경우
   */

  // Bad 💩
  function getResult(score) {
    let result;
    if (score > 5) {
      result = "good";
    } else {
      result = "bad";
    }
    return result;
  }

  // Good 👍
  function getResult(score) {
    return score > 5 ? "good" : "bad";
  }
}
