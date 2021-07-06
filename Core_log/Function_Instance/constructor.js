var Book = function () {};
var result = Book === Book.prototype.constructor;
console.log("1 :", result);
// 1 : true
/**
 * Book Function 오브젝트와 Book 오브젝트의 constructor 또한 Book 오브젝트를 생성할 때 Book 오브젝트의 전체를 참조하고 있다.
 */

var obj = new Book();
console.log("2 :", Book === obj.constructor);
// 2 : true
/**
 * obj 의 constructor 가 Book 오브젝트 전체를 참조하기 때문이다.
 */

console.log("3 :", typeof Book);
console.log("4 :", typeof obj);
// 3 : function
// 4 : object
/**
 * 4번의 obj 인스턴스의 경우 object 타입이 찍히는 것은
 * 인스턴스 생성시, [[ Construct ]] 가 실행될 때, 생성한 오브젝트의 [[ Class ]] 에 "Object" 라고 설정하기 때문이다.
 *
 * */
