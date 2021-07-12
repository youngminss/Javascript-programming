// ===== function 블록 =====
// let sports = "축구";
// function show() {
//   let sports = "농구";
//   console.log("안 :", sports);
// }
// show();
// console.log("밖 :", sports);
// 안 : 농구
// 밖 : 축구
/**
 * show() 함수를 호출시, 스코프에서 show 함수에 sports 식별자부터 찾는다.
 * show() 함수 외부에서 console에 sports 는 글로벌 오브젝트의 sports 식별자를 먼저 찾게 된다.
 */

// ===== 함수 밖 변수 사용가능(클로저) =====
// let sports = "축구";
// function show() {
//   console.log(sports);
// }
// show();
// 축구
/**
 * show() 함수 호출시, 선언적 환경레코드에서 sports 식별자를 먼저 찾는데, 없다.
 * 그럼, 외부 렉시컬 환경 참조를 봐서, sports 식별자가 있는지 확인하는데 있다 (이는, 글로벌변수의 sport 식별자)
 */

// ===== try - catch 블록 스코프 =====
// let sports = "축구";
// try {
//   let sports = "농구";
//   console.log("안 : ", sports);
// } catch (e) {}
// console.log("밖 : ", sports);
// 안 :  농구
// 밖 :  축구
/**
 * function 블록과 마찬가지로, try ~ catch 문에서 try 가 블록 스코프에 해당한다.
 * catch 문은 해당이 안되고, 이는 try 문 외부 변수 사용이 가능하다.
 */

// ===== try 밖의 변수 사용 =====
// let sports = "축구";
// try {
//   let sports = "농구";
//   console.log("안 :", sports);
//   abc = err; // 에러시점
// } catch (e) {
//   console.log("catch :", sports);
// }
// console.log("밖 :", sports);
// 안 : 농구
// catch : 축구
// 밖 : 축구
/**
 * 보다시피, catch 에서는 글로벌변수, try 내부에서의 지역변수를 고를때, try 외부에 글로벌 변수를 택한다.
 */

// ===== switch - case 도 블록스코프 =====
let item = 1;
switch (item) {
  case 1:
    let sports;
    break;
  case 2:
    let sports;
  // break;
  default:
    console.log(sports);
    break;
}
// SyntaxError: Identifier 'sports' has already been declared
/**
 * case 1 에서 이미 sports 라는 식별자가 설정이 되었다.
 * switch 는 전체가 한 스코프이다.
 * 고로, case 2 에서, 이미 선언한 sports 식별자에 대해 컴파일 에러가 발생
 */
