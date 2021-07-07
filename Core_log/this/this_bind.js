// ===== function 오브젝트 생성 및 호출 =====
var book = {
  point: 123,
  get: function () {
    return this.point;
  },
};
var obj = book.get.bind(book);
console.log(typeof obj);
var result = obj();
console.log(result);
// function
// 123
/**
 * book.get.bind(book) 를 통해, function 오브젝트가 생성만 되고, 호출은 안된다.
 * 이 때, 생성된 function 오브젝트는 생성한 오브젝트(book)에 [[TargetFunction]] 에 설정
 * obj 의 타입을 확인해보면, book.get 함수이므로, function 오브젝트가 출력
 * obj() 로 호출을 하면, this, 여기서 this는 function 오브젝트 생성시 [[BoundThis]] 에 설정된 파라미터로 넘긴 book 오브젝트
 * [[ BoundThis ]] 를 참조하고 Book 오브젝트고, 그것의 point 니깐 123 출력
 */

// ===== 파라미터 병합 =====
var book = {
  get: function () {
    return Array.prototype.slice.call(arguments);
  },
};
var obj = book.get.bind(this, 10, 20);
var result = obj(30, 40);
console.log(result);
// [ 10, 20, 30, 40 ]
/**
 * book.get.bind(this, 10, 20) 에서 this 는 book.get function 오브젝트
 * 파라미터로 넘긴 10,20
 * obj(30,40) 에서 book.get() 함수가 호출되고, 10,20 이 내부 Array.prototype.slice.call(arguments) 에 arguments 로
 * 설정되어 있다가, 호출 되어, 배열 형태인 [10,20] 형태로 반환
 * 그것과, obj 호출 시 파라미터로 넘긴 30,40도 "병합"
 * 결과적으로 [10,20,30,40]
 */
