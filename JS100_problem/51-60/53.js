/**
 * 들어오는 괄호문자열에 대해서, 각 괄호문자를 배열로 변환하고
 * forEach 문을 돌려서 해결하는 경우
 * 중간에 조건에 맞지 못해, No 를 반환하고 끝내고 싶은경우 적용이 되지 않는다.
 *
 * - 이는, forEach 문에 내에서는 "예외를 발생시키는 경우" 외에는
 * - return, break, continue 등을 사용해서 forEach 문을 중단시킬 수 없다고 한다.
 * - (자세한 사항은 MDN 확인)
 */

{
  function isCorrectBracket(brackets) {
    let stack = [];

    for (let i = 0; i < brackets.length; i++) {
      if (brackets[i] === "(" || brackets[i] === "{" || brackets[i] === "[") {
        stack.push(brackets[i]);
      } else {
        if (brackets[i] === ")") {
          if (stack.length > 0 && stack[stack.length - 1] === "(") {
            stack.pop();
          } else {
            return "NO";
          }
        } else if (brackets[i] === "}") {
          if (stack.length > 0 && stack[stack.length - 1] === "{") {
            stack.pop();
          } else {
            return "NO";
          }
        } else {
          if (stack.length > 0 && stack[stack.length - 1] === "[") {
            stack.pop();
          } else {
            return "NO";
          }
        }
      }
    }
    return stack.length === 0 ? "YES" : "NO";
  }

  console.log(isCorrectBracket("{{}{}}"));
  console.log(isCorrectBracket("[[]]["));
  console.log(isCorrectBracket("(())(()))"));
  console.log(isCorrectBracket("({}[]((){}))"));
  console.log(isCorrectBracket("}"));
}
