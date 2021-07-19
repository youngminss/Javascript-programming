/**
 * String.prototype.match()
 * = match() 메서드는 문자열이 정규식과 매치되는 부분을 검색
 * + 배열형태로 반환
 * + 존재하지 않을 경우, null 반환
 * + g 옵션을 통해, 전체를 반환할 수 있다.
 */
{
  let oneCount = 0;
  for (let i = 0; i < 1001; i++) {
    if (String(i).match(/1/g) !== null) {
      oneCount += String(i).match(/1/g).length;
    }
  }
  console.log(oneCount);

  // 제공답안(정규표현식)
  // let s = "";
  // for (let i = 0; i <= 1000; i++) {
  //   s += i;
  // }
  // console.log(s);
  // console.log(s.match(/1/g).length);
}
