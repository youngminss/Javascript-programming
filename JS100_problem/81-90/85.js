/**
 * regex 랑 어울리는 함수들(match,replace,find 등등..)에 regex를
 * - String.prototype.match(/regex/option) << 이런식이 아니라
 * - String.prototype.match(new RegExp(regex, option) || []) << 이런 방식도 가능하다.
 *    + 이것은 의미는 찾으면 regex에 맞는 모든 요소로 이뤄진 배열을, 하나라도 없으면 빈 배열을 할당한다는 뜻
 */
{
  function numberGame(step) {
    let ruleNumber = "1";

    for (let i = 1; i < step; i++) {
      let newRuleNumber = "";
      for (let j = 1; j < 10; j++) {
        let isRuleNumber = 0;

        for (let k = 0; k < ruleNumber.length; k++) {
          if (ruleNumber[k] === String(j)) {
            isRuleNumber++;
          }
        }

        if (isRuleNumber !== 0) {
          newRuleNumber += `${j}${isRuleNumber}`;
        }
      }
      ruleNumber = newRuleNumber;
    }

    return ruleNumber;
  }

  console.log(numberGame(6));

  // < 답안 방식 >
  // function rule(answer) {
  //   let answerMax = 9;
  //   let result = "";

  //   for (let i = 1; i < answerMax; i++) {
  //     let re = new RegExp(i, "g");
  //     let count = (answer.match(re) || []).length;

  //     if (count >= 1) {
  //       result = result + String(i) + String(count);
  //     }
  //   }
  //   return result;
  // }
}
