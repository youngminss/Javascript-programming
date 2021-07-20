/**
 * ✅ 다시풀기
 * - 해당 문자가 rule 안에 존재하는지 체크
 *    + String.prototype.includes()
 *      + 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환
 *    + Array.prototype.includes()
 *      + 배열이 특정 요소를 포함하고 있는지 판별
 */
{
  function solution(blocks, rule) {
    let answer = [];
    for (let block of blocks) {
      answer.push(checkSequenceBlock(block, rule));
    }
    return answer;
  }
  function checkSequenceBlock(block, rule) {
    let temp = rule.indexOf(rule[0]);
    for (let ch of block) {
      if (rule.includes(ch)) {
        if (temp > rule.indexOf(ch)) {
          return "불가능";
        }
        temp = rule.indexOf(ch);
      }
    }
    return "가능";
  }

  console.log(solution(["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"], "ABD"));
}
