// ===== 호이스팅(Hoisting) 기본예제 =====
var result = book();
console.log(result);

function book() {
  return "호이스팅";
}
// 호이스팅
/**
 * 스크립트 언어는, 코드를 위에서 아래로 엔진이 해석한다고 했다. 그런 차원에 현재, book function 선언문보다 먼저 호출을 했음에도, 예상대로 "호이스팅"이 잘 출력되는 이유는 ?
 * 일단, 이게 호이스팅(Hoisting)이다.
 * - JS 엔진은 코드를 해석하는 데 있어서, "3번" 해석한다고 했다.
 * + 1. "함수선언문"을 해석하고
 * + 2. "변수를 초기화" 해석하고
 * + 3. "코드를 실행" 한다.
 *
 * 궁극적으로, book() 함수를 호출하고, 반환 값을 받아 result에 할당 받은 것을, console.log(result) 로 찍기 이전에
 * JS 엔진은, 아래의 book 선언문을 먼저 해석하고, 이때, book Function 오브젝트가 생성된다.
 * 그로 인해, book Functio 오브젝트의 Scope 가 설정이 된다.
 * 2번째 엔진 해석에서, result 에 book 표현식이 해석이 된다.
 * 3번째 엔진 해석엣, 실질적인 코드를 "실행" 한다.
 * 이떄, result 변수에 book() 함수를 실행할 때, 이미, 내부적으로 JS 엔진은 book 함수의 Scope 설정이 되어있기 때문에, 실행문 내용인 "호이스팅" 문자열 반환을 한다.
 * 그로 인해, console 에 "호이스팅"이 잘 찍히는 것을 확인할 수 있다.
 */

// ===== 함수 선언문 초기화 단계에서 값이 이미 존재한다면, 초기화 하지 않는 경우 =====
var result = book();
console.log(result);

function book() {
  return "호이스팅";
}

book = function () {
  return "함수 표현식";
};
// 호이스팅
/**
 * 포인트 : 결과는 "함수 표현식" 이 아니라, "호이스팅" 이다.
 * 왜 ?
 * - 1. 함수 선언문을 해석할 것이다.
 *   + 현재, book 함수 선언문이 있고, 엔진은 이를 해석한다.
 *   + 이 때, book Function 오브젝트를 생성한다.
 * - 2. 변수를 초기화 해석할 것이다.
 *   +  result : undefined 로 설정을 하고
 *   + 다음이 중요한데, book 이라는 "변수" 에 함수 표현식이 있어서, undefined 로 초기화하려는데
 *   + 이전에, 함수 선언문 해석에서, book 이라는 이름이 존재한다.
 *   + 심지어, undefined 가 아닌 "호이스팅" 이라는 값도 있다.
 *   + 이러면, 엔진은 새로 초기화를 진행하지 않는다.
 * - 3. 코드를 실행한다.
 *   + 이 때, console 로 결과를 찍어볼 경우, Scope 는 book 함수의 반환값을 가리키고 있으므로, "호이스팅" 이 출력된다.
 */

// ===== 코딩 시간 =====
// 1. 함수 선언문 - 함수 호출 - 함수 선언문
function book() {
  function getBook() {
    return "책 1";
  }
  console.log(getBook());
  function getBook() {
    return "책 2";
  }
}
book();
// 책 2
/**
 * 1. 엔진은 함수 선언문을 찾아 해석한다.
 *   + 첫 번째 getBook 선언문을 만나, Function 오브젝트를 생성한다. "값"을 초기화하고 Scope가 설정된다.
 *   + 두 번째 getBook 선언문을 만나, Function 오브젝트를 생성하지만, 이미 같은이름존재하므로, 값만 "책 2" 로 변경된다.
 * 2. 변수 초기화
 * 3. 함수 코드 실행
 *   + Scope 에 설정되어있던, 두 번째 getBook Function 오브젝트의 반환 값인, "책 2"이 반환된다.
 */

// 2. 함수 표현식 - 함수 호출 - 함수 표현식
function book() {
  var getBook = function () {
    return "책 1";
  };
  console.log(getBook());
  var getBook = function () {
    return "책 2";
  };
}
book();
// 책 1
/**
 * 1. 함수 선언문 해석
 * 2. 변수 초기화
 *   + 첫 번째 getBook 이라는 변수의 function 키워드를 만나 undefined 로 설정
 *   + 두 번째 getBook 변수에 또 function 키워드를 만나 undefined 덮어 설정
 * 3. 함수 코드 실행
 *   + 첫 번째 getBook 에 Function 오브젝트가 생성되면서, 반환 값인 "책 1"이 getBook 에 값으로 할당이 된다.
 *   + console 에서 이제 첫 번째 getBook 함수 호출이 가능해지고, 첫번째 getBook 오브젝트의 "책 1" 이 찍힌다.
 *   + 마지막으로, 두 번쨰 getBook 의 Function 오브젝트가 생성되고, 이 때, 반환 값이 "책 2"로 다시 설정된다.
 */

// 3. 함수 선언문 - 함수 호출 - 함수 표현식
function book() {
  function getBook() {
    return "책 1";
  }
  console.log(getBook());
  var getBook = function () {
    return "책 2";
  };
}
book();
// 책 1
/**
 * 1. 함수 선언문을 해석한다.
 *   + 첫 번째 getBook 선언문이 있으므로, 해석하고, Functio 오브젝트를 생성한다.
 * 2. 변수를 초기화 한다.
 *   + 두 번째 getBook 변수에 undefined 가 설정하려고 했으나, 이미 초기화가 되어 있으므로 생략
 * 3. 함수 코드를 실행한다.
 *   + 이미, 함수 선언문 해석과정에서, getBook Function 오브젝트가 생성되었으므로, getBook 함수 호출이 가능하다.
 *   + 결과적으로, console 에는 "책 1"이 찍힌다.
 *   + 마지막으로, getBook 변수에 Function 오브젝트가 생성되고, 이미 함수 선언문에서 초기화 되어있던 getBook 이라는 이름의 값이 "책 2" 반환 값을 가지는 Function 오브젝트로 변경
 */

// 4. 함수 표현식 - 함수 호출 - 함수 선언문
function book() {
  var getBook = function () {
    return "책 1";
  };
  console.log(getBook());
  function getBook() {
    return "책 2";
  }
}
book();
// 책 1
/**
 * 1. 함수 선언문을 해석한다.
 *   + 마지막에 존재하는 getBook 함수 선언문으로 인해, 반환 값을 "책 2"로 하는 Function 오브젝트가 생성
 * 2. 변수 초기화
 *   + 첫 부분의 변수, getBook 이름에 undefined 값을 할당하려고 했으나, 이미 "값" 이 존재하므로 생략
 * 3. 함수 코드 실행
 *   + 첫 부분의 getBook 변수의 반환 값이 "책 1"인 Function 오브젝트가 생성되면서, 이를 getBook 이라는 이름의 값으로 할당
 *   + console 에서 호출하는 getBook은 첫 부분의 getBook 변수의 Function 오브젝트의 함수를 호출하고, 이는 "책 2" 를 반환
 */
