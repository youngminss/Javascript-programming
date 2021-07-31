/**
 * 수식이 맞지 않는 조건
 * - 연산자(operator)가 등장한 이후 또 숫자가 아닌, 또 연산자나 괄호가 등장하는 경우
 * - 끝까지 조사했는데, 괄호스택 남아있는 경우, 괄호쌍이 맞지 않는 경우
 */
{
  function isBracket(char) {
    return "(){}".includes(char) ? true : false;
  }
  function isCorrectBraketPair(bracketStack, inBraket) {
    if (inBraket === "(" || inBraket === "{") {
      bracketStack.push(inBraket);
    } else {
      if (bracketStack.length === 0) {
        return false;
      }
      const popBracket = bracketStack.pop();
      if (inBraket === ")") {
        if (popBracket !== "(") {
          return false;
        }
      } else if (inBraket === "}") {
        if (popBracket !== "{") {
          return false;
        }
      }
    }
    return true;
  }
  function isNumber(char) {
    return "0123456789".includes(char) ? true : false;
  }
  function isOperator(char) {
    return "+-*/%".includes(char) ? true : false;
  }
  function isSpace(char) {
    return char === " " ? true : false;
  }
  function isClearCondition(isLastOperator, bracketStack) {
    return !isLastOperator && bracketStack.length === 0 ? true : false;
  }

  function isCorrectFormula(formula) {
    let bracketStack = [];
    let isLastOperator = false;

    for (let i = 0; i < formula.length; i++) {
      if (!isSpace(formula[i])) {
        if (isBracket(formula[i])) {
          if (!isCorrectBraketPair(bracketStack, formula[i])) {
            return "False";
          }
        }
        if (isNumber(formula[i])) {
          if (isLastOperator) {
            isLastOperator = false;
          }
        }
        if (isOperator(formula[i])) {
          if (isLastOperator) {
            return "False";
          }
          isLastOperator = true;
        }
      }
    }

    // 끝까지 검사했고, 연산자로 끝나지 않고, 괄호체크배열 비어있어서, 이상없으면 => 올바른 수식
    return isClearCondition(isLastOperator, bracketStack) ? "True" : "False";
  }

  console.log(isCorrectFormula(""));
}

// "5 + 7 * {(3 * 5)}"
// "5 + 7){ * (3 * 5)"
// "{"
// "}"
// "(}"
