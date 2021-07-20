/**
 * 때로는 유용할 가운데 절취선 만들기
 * - String.prototype.padStart()
 * 		+ 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
 * 		+ 채워넣기는 대상 문자열의 시작(좌측)부터 적용
 * - String.prototype.padEnd()
 * 		+ 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
 * 		+ 채워넣기는 대상 문자열의 끝(우측)부터 적용
 */
{
  const str = "hello";
  const n = 25 + parseInt(str.length / 2, 10);

  // 왼쪽부터 채우기
  let answer = str.padStart(n, "=");
  answer = answer.padEnd(50, "=");
  console.log(answer);
  // ======================hello=======================
}
