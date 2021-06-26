var ONE = 123;
ONE = 456;

console.log(ONE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

/**
 * # 진수
 * JS에서 상수변수명은 "영어 대문자"로 약속 ! = 시맨틱
 * JS에서 상수는 변경 가능
 * 하지만, 기본적으로 상수를 선언한 후에 변경하는 것은 올바르지 못함
 * 그래서, 변경할 시 올바르지 못하다는 경고메시지 발생
 */

console.log(0xf);
console.log(0xff);
console.log(0xfff);

/**
 * 16진수 출력방식 : 0x~~~
 */
