// ===== 큰 따옴표인 string 형태로 작성됨 =====
var value = {
  book: "JS 책",
  title: 123,
};
var result = JSON.stringify(value);
console.log(result);
console.log(typeof result);
// {"book":"JS 책","title":123}
// string

// ===== 배열도 string 형태의 배열로 반환 =====
var value = ["book", "책", 123];
var result = JSON.stringify(value);
console.log(result);
console.log(typeof result);
// ["book","책",123]
// string

// ===== 특수한 값들도 string 형태로 변환 ★ =====
var value1 = [Infinity, NaN, null];
var result1 = JSON.stringify(value1);
console.log(result1);
console.log(typeof result1);
// [null,null,null]
// string
/**
 * JS에서의 Number에 대한 몇몇 표현은 다른 언어에서는 지원을 하지 않거나, 다를 수 있으니 확인하는 작업이 필요하다.
 */
var value2 = [true, false];
var result2 = JSON.stringify(value2);
console.log(result2);
console.log(typeof result2);
// [true,false]
// string
/**
 * Boolean 오브젝트는 이상없다.
 */

// ===== undefined 를 string 으로 반환 ★ =====
console.log(JSON.stringify(undefined));
console.log(typeof JSON.stringify(undefined));
// undefined
// undefined
console.log(JSON.stringify([undefined]));
console.log(typeof JSON.stringify([undefined]));
// [null]
// string
console.log(JSON.stringify({ value: undefined }));
console.log(typeof JSON.stringify({ value: undefined }));
// {}
// string
/**
 * 같은 undefined 를 JSON 형태로 변환해도, 어떤 자료형에 넣느냐에 따라서 반환 값은 다르다.
 */
