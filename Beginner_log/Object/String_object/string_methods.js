// ===== string.charAt() =====
var value = "sport";
console.log(value.charAt());
console.log(value.charAt(1));
console.log(value.charAt(4));
console.log(value.charAt(5));
// s
// p
// t
//    << (빈 문자열)
/**
 * 파라미터가 없으면, default = 0번째 인덱스 의미
 * 범위를 벗어난 인덱스를 제공하면, charAt() 메소드는 ""(빈 문자열) 반환 */

// ===== 인덱싱 =====
console.log(value[0]);
console.log(value[1]);
console.log(value[4]);
console.log(value[5]);
// s
// p
// t
// undefined
/**
 * 인덱싱은, 존재하지 않는 범위를 요구하면, undefined 반환
 */

// ===== string.indexOf(검색할문자열, [시작위치])
var value = "1234561213";
console.log(value.indexOf(2));
console.log(value.indexOf(45));
// 1
// 3
/**
 * 내부적으로 비교할 때, == 연산을 진행하는 것 같음, === 로직으로 구성되어 있으면 파라미터가 현재 숫자이기 때문에 에러 발생해야 함
 * 주어진 문장 내에서 첫번째로 2가 등장하는 첫번째 인덱스는 1 반환
 * 하나의 타겟이 아닌, 45같은 길이가 2 이상인 타겟도, 처음 시작하는 위치인 인덱스 반환
 * 위에 상황에서는 3번째 인덱스에서 45의 4가 등장함으로 3 반환
 */

console.log(value.indexOf(1, 5));
// 6
/**
 * 위에 의미는, 주어진 value 문자열 내에서, 1 로 시작하는 위치의 인덱스를, 5번째 인덱스부터 조사해서 몇번째인지 알려줘 ! 라는 의미
 * 따라서, 5번째 인덱스 이후, 1이 처음 나오는 위치는 6번째 인덱스
 */

console.log(value.indexOf(789));
// -1
/**
 * 같은 문자열 존재하지 않을 경우, -1 반환
 */
