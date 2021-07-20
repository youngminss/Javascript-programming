/**
 * 정수 n 에 대해, (한국기준) ,(콤마) 자릿수를 끼워넣는 법
 * - ★ Number.prototype.toLocaleString('ko-KR', option)
 * 		+ toLocaleString() 함수는 숫자를 로컬의 language format에 맞는 문자열로 변경해 줍니다.
 * 		+ 파라미터로 아무것도 전달되지 않으면 사용자 로컬 환경의 locale을 default로 사용합니다.
 * 		+ option 에, maximumFractionDigits 프로퍼티 = 소숫점 표현을 가리킨다.
 *
 * - 정규표현식 사용법
 * 		+ n1.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
 *
 *
 */
{
  const n = 123456789.67861234;
  const option = {
    maximumFractionDigits: 4,
  };
  console.log(n.toLocaleString(option));
}
