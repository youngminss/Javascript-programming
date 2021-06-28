// ===== Number.toExponential() =====
// ===== 지수 표기 =====
var value = 1234;
console.log(value.toExponential());
console.log(typeof value.toExponential());
console.log(value.toExponential().split("e"));
// 1.234e+3
// string
// [ '1.234', '+3' ]
/**
 * 반환 값은 === string 타입이라는 점
 * 이 특징을 통해, 많은 사용 확장성 기대
 */

// ===== 소수 이하 자릿수 작성 =====
var value = 123456;
console.log(value.toExponential());
console.log(value.toExponential(1));
console.log(value.toExponential(2));
console.log(value.toExponential(3));
// 1.23456e+5
// 1.2e+5
// 1.23e+5
// 1.235e+5
/**
 * 파라미터로 넘긴 자리 수까지의 소수점 값까지만 상세출력, 나머지는 e+~ 처리한다.
 * 마지막 예시를 보면, 가장 마지막 표시 소수점 바로, 다음 소수점의 반올림까지 적용된 것을 확인
 */

// ===== Number.toFixed() =====
var value = 1234.567;
console.log(value.toFixed());
console.log(value.toFixed(1));
console.log(value.toFixed(2));
console.log(value.toFixed(3));
console.log(value.toFixed(4));
// 1235
// 1234.6
// 1234.57
// 1234.567
// 1234.5670
/**
 * 반환 값 === "string" 타입이라는 점
 * Number.toFixed()에 어떤 파라미터도 없으면, 변환할 실수의 정수부분만 반올림까지 처리해서 반환
 * 파라미터로 넘긴 숫자의 소수점 자리수 까지만, 반올림 적용해서 출력
 * 기존의 소수점 값을 벗어난 자리수의 파라미터 값을 넘기면 빈 소수값 자리수는 0 으로 채워넣음
 */
