// ===== 소수를 정수로 변환 =====
console.log(parseInt(123.56));
// 123
/**
 * 정수만 잘라서 반환 (반올림 X)
 */

// ===== 소수, 문자 제외 =====
// ★ 가장 많이 쓴다. 특히 CSS 에서 px 을 제외한 앞에 수치만 뽑아 낼 때 사용
console.log(parseInt("-123.56"));
console.log(parseInt("123px")); // ★
console.log(parseInt("12ABC34"));
// -123
// 123
// 12
/**
 * 문자열 음수 부동소수점 => 소숫점을 제외한 나머지 음수만 추출
 * 문자열 123px 에서 숫자만 해당하는 => 123 추출
 * 문자열 12ABC34 에서, 문자 A가 등장하기 이전 숫자까지만 추출
 * 타입은 모두 number 타입
 */

// ===== 변환 기준 =====
console.log(parseInt("0012"));
console.log(parseInt(00012));
console.log(parseInt("   12 "));
console.log(parseInt());
// 12
// 10
// 12
// NaN
/**
 * 숫자 문자열인데 앞에 의미없는 0 같은 것은 변환시 생략
 * 00으로 시작하는 숫자를 8진법으로 계산하는 듯하다.
 * 공백도 변환하는 과정에서 생략
 * 빈 값을 변환하는 경우 NaN 반환
 */

// ===== 진법 적용 =====
console.log(parseInt("13", 10));
console.log(parseInt("13", 2));
console.log(parseInt("13", 8));
console.log(parseInt("13", 16));
// 13
// 1
// 11
// 19
/**
 * 순서대로 10, 2, 8, 16 진법으로 타겟수를 변환 가능한지 확인
 * 2진법은 parseInt 방식으로 변환이 정상적으로 작동하지 않을 것을 확인
 * 진법 변환은, JS 에서는 Global 오브젝트의 "parseInt()"" 와 String 오브젝트의 "toString()" 의 조합으로 구한다.
 */

// ===== 소수 변환 =====
console.log(parseFloat("-123.45") + 6);
console.log(parseFloat("12.34AB56"));
// -117.45
// 12.34

// ===== 변환 기준 =====
console.log(parseFloat("1.2e3"));
console.log(parseFloat("   12.34  ") + 20);
console.log(parseFloat());
// 1200
// 32.34
// NaN
/**
 * 1.2e3 은 실제로 1200을 의미한다.(지수 표기) => 이것을 parseFloat 변환 한 것
 * parseFloat 도 양쪽 공백은 모두 제거한다.
 * 빈 값을 변환하려면 parseInt 와 마찬가지로 NaN 을 반환
 */
