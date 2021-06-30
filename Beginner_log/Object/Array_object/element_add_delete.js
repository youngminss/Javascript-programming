// ===== 삽입할 위치에 인덱스 지정 =====
var value = [1, 2];
value[4] = 5;
console.log(value);
console.log(value.length);
// [ 1, 2, <2 empty items>, 5 ]
// 5
/**
 * 기존 배열크기는 length 가 2 인데, 다음 라인에서 4번 째 인덱스에 값을 대입한다 ?
 * JS가 아닌, 다른 언어에서는 에러를 발생시키는게 정상이다.
 * 하지만, JS에서는 그 사이를 undefined 처리하고, 에러를 발생시키지 않는다.
 */

// ===== var 변수는 삭제 불가 ====
var value = 123;
console.log(delete value);
// false
/**
 * var 변수로 선언한 변수는 삭제가 불가능
 * 고로, delete 연산의 결과로 false 를 반환
 */

global_value = "글로벌 변수";
console.log(delete global_value);
try {
    console.log(global_value);
} catch(err) {
    console.log("존재하지 않음");
    // console.log(`global_value : ${global_value}`);
}
// true
// 존재하지 않음
// ReferenceError: global_value is not defined
/**
 * global_value 변수는 var 키워드가 없는, global 변수이므로, delete 연산 가능
 * 고로, delete 연산의 결과는 true
 * 이후, global_value 는 사라짐
 */

// ===== Object의 프로퍼티 삭제 =====
var book = { title : "책" };
console.log(delete book.title);
console.log(book.title);
// true
// undefined
/**
 * 오브젝트에 프로퍼티 이름이 존재하므로, delete 연산결과 true
 * 그리고, 해당 프로퍼티의 값은 삭제되었으므로, undefined
 */

// ===== 오브젝트 전체 삭제 =====
var book = { title : "책" };
console.log(delete book);
// false
/**
 * var 키워드가 적용된 오브젝트 변수 자체는 delete 불가
 */
sports = { item : "축구" };
console.log(delete sports);
// true
/**
 * global 오브젝트 변수는 delete 가능
 */


// ===== 배열 인덱스로 삭제 =====
var value = [1,2,3,4];
console.log(delete value[1]);
console.log(value.length);
console.log(value);
// true
// 4
// [ 1, <1 empty item>, 3, 4 ]
/**
 * 현재 배열의 1번 인덱스가 존재하므로, delete 연산은 true
 * 그리고나서, 배열의 길이를 확인해봤더니, 여전히 length 는 4
 * 값을 찍어보니, 삭제된 부분의 값이 undefined 로 변환, 크기는 보존
 */


// ===== 배열 삭제 메커니즘 =====
var value = [1,2,3,4];
delete value[1];
console.log(value);
// [ 1, <1 empty item>, 3, 4 ]

for(var i = 0; i < value.length; i++) {
    console.log(value[i]);
}
// 1
// undefined
// 3
// 4

for(var i = 0; i< value.length; i++) {
    if(value[i] !== undefined) {
        console.log(value[i])
    }
}
// 1
// 3
// 4
/**
 * 배열의 특정 인덱스 엘리먼트를 delete 해도, 연산 후에, undefined 값이 존재하기 때문에
 * 상황에 따라, undefined 를 제외한 처리를 해줘야 한다.
 */
