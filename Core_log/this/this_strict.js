// ===== 오브젝트 작성하지 않을 경우 =====
function book() {
  "use strict";
  return this;
}
var result = book();
console.log(result);
// undefined
/**
 * 왜 undefined 가 출력되었는가 ?
 * - book 함수가 호출된다.
 * - book 함수 내부에서, use strict 모드이고 this 를 반환하는데, 여기서 book 함수를 호출한 객체가 global 오브젝트이나 명시되어 있지 않고
 * - 내부에서는 use strict 모드이기 때문에, global 오브젝트를 명시하지 않은 상태에서 this 를 통해 함수를 호출한 객체를 참조하려고 하니, 존재하지 않다고 엔진이 판단하고 undefined 를 반환
 */

// ===== window 오브젝트 작성시 =====
// function book() {
//   "use strict";
//   return this;
// }
// var obj = window.book();
// console.log(obj === window);
// true
/**
 * book 함수를 호출하는 객체를 window 오브젝트로 명시했으므로
 * book 함수 내부에서 반환하는 this 는 즉, window 오브젝트를  참조하므로, 그대로 window 오브젝트를 반환하고
 * 값과 타입을 비교하니, 당연히 true 를 반환
 */

// ===== this 참조 오브젝트 파악 =====
var book = {
  point: 100,
  member: {
    point: 200,
    get: function () {
      console.log(this === book.member);
      console.log(this.point);
    },
  },
};
book.member.get();
// true
// 200
/**
 * 맨 마지막에 book.member.get() 함수를 호출하는 시점에서 호출 오브젝트는 book 이 아니라, book.member 이다.
 * 그럼, member 오브젝트에 get 함수 식별자를 찾아 호출하고, 내부에서 this는 곧, member 오브젝트를 뜻하고
 * book.member 와 this(book.member) 가 참조하는 것은 같으므로 true
 * this(book.member) 에 프로퍼티인 point 식별자를 찾아 200을 반환
 */

// ===== 정리 시간 1 =====
var book = {
  value: 123,
  get: function () {
    var value = 456;
    console.log(this === window);
    console.log(this.value);
  },
};
var fn = book.get;
fn();
// true
// undefined
/**
 * true 가 찍힌 이유
 * - fn 을 호출한 시점에 주체는 book 이며, book 오브젝트는 global 오브젝트이다.
 * - get function 오브젝트 내부에서 this 는 global 오브젝트를 참조하고, 이는 window 오브젝트는 host 오브젝트 개념으로 같은 선상을 의미한다.
 * - 그러므로, 값,타입 비교시 true 반환
 * undefined 가 찍힌 이유
 * - this(book 오브젝트)를 참조하고 있고, value 식별자를 찾는데, book 오브젝트에 value 프로퍼티가 있으나, 이는 현재 var 키워드가 없으므로
 * - 글로벌 변수이고, 글로벌 오브젝트 프로퍼티에 존재한다.
 * - console 에서는 this(book 오브젝드)의 value 식별자를 찾으려 하나, 존재하지 않으므로 undefined 를 반환
 */

// ===== 정리시간 2 =====
function getTitle() {
  console.log("HTML 책");
}
var book = function () {
  function getTitle() {
    console.log("JS 책");
  }
  this.getTitle();
  getTitle();
};
book();
// HTML 책
// JS 책
/**
 * - 맨 마지막줄에서 book 함수가 호출되고, 주체는 글로벌 오브젝트다.
 * - this.getTitle() 에서 this는 글로벌 오브젝트를 참조한다.
 * - 이는, book Function 오브젝트가 아닌, 글로벌 오브젝트의 function getTitle() 선언문에 접근하고 호출한다.
 * - HTML 책이 출력된다.
 * - 다음 getTitle() 함수는 book Function 오브젝트로 설정되어 있고, book Function 오브젝트 생성시, 선언적 환경 레코드에 있는 getTitle을 찾아 실행한다.
 * - JS 책이 출력된다.
 */