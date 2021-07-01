// ===== JS OOP의 일반적인 방법 =====
var data = ["book", "책", 123];
var obj = new Array();
var result = obj.concat(data);
console.log(result);
console.log(typeof result);
console.log(result instanceof Array);
// [ 'book', '책', 123 ]
// object
// true
/**
 * 가장 일반적인 방법
 * - Array 인스턴스를 생성했고, 인스턴스 내부에 메소드를 사용한 경우
 */

// ===== 데이터로 메소드 호출하는 방법 =====
var data = ["book", "책", 123];
var result = data.concat();
console.log(result);
console.log(typeof result);
console.log(result instanceof Array);
// [ 'book', '책', 123 ]
// object
// true
/**
 * JS 엔진이, data.concat() 을 만나는 순간 data 타입에 따라, "아 ! 빌트인 오브젝트를 생성한다."
 * 위에 예제는, data 가 배열이므로, Array 오브젝트의 concat() 호출
 */

// ===== 오브젝트의 함수 호출 =====
var data = ["book", "책", 123];
var bookObj = {
  concat: function (data) {
    return data.concat();
  },
};
console.log(bookObj.concat(data));
console.log(typeof result);
console.log(result instanceof Array);
// [ 'book', '책', 123 ]
// object
// true

// ===== 인스턴스의 메소드 호출 =====
var data = ["book", "책", 123];
var Book = function (data) {
  this.data = data;
};
Book.prototype.concat = function () {
  return this.data.concat();
};
var oneInstance = new Book(data);
console.log(oneInstance.concat());
console.log(typeof oneInstance);
console.log(oneInstance instanceof Array);
// [ 'book', '책', 123 ]
// object
// false
