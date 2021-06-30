// ===== 배열 여부 체크 =====
console.log(Array.isArray([1, 2, 3, 4, 5]));
console.log(Array.isArray(12345));
// true
// false
/**
 * [1,2,3,4,5] 는 배열(Array이다. => true
 * 12345 는 숫자(Number) 이다. => false
 */

// ===== isArray() 가 필요한 이유 =====
console.log(typeof { a: 1 });
console.log(typeof null);
console.log(typeof [1, 2, 3]);

console.log(Object.is(null));
// object
// object
// object
// false
/**
 * typeof 키워드로 확인시 서로간의 구분이 안됨
 * 배열 마저도 object 로 동일하게 간주
 * [Note]
 * - null 은 object 가 아니다. => 정확한 판단을 위해 Object.is() 함수를 사용해서 판단 => false
 */
