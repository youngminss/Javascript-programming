// ===== 블록 스코프 =====
// let sports = "축구";
// if (sports) {
//   let sports = "농구";
//   console.log("안 : ", sports);
// }
// console.log("밖 : ", sports);
// 안 :  농구
// 밖 :  축구
/**
 * if문 블록 안에 let sports 변수와 바깥 let sports 변수는 다른 스코프를 가진다.
 */

// ===== let 변수 이름 선언 =====
// let book;
// let one, two;
// console.log(book, one, two);
// undefined undefined undefined
/**
 * 다음과 같이 초기화 하지 않고, 변수 선언만해도 가능
 * 단, 값은 undefined
 */

// ===== 변수에 초깃값 할당 =====
// let book = "책";
// let one = 1,
//   two = 10 + 20;
// console.log(book, one, two);
// 책 1 30
/**
 * 다음과 같이 변수 선언과 동시에 초기화 가능
 */

// let sports = "축구";
// if (sports) {
//   let sports = "농구";
//   console.log("안 : ", sports);
// }
// console.log("밖 : ", sports);
// 안 :  농구
// 밖 :  축구
/**
 * if문 안에 sports 와 바깥 sports 변수가 스코프가 다르므로 같은 이름의 식별자 사용 가능
 * 변숫값이 대체되지 않고 유지된다.
 * 블록 안에서, 블록 바깥 변수의 접근은 가능
 * 블록 바깥에서,블록 안에 변수의 접근은 불가
 */

// ===== 블록 스코프 =====
// let sports = "축구";
// sports = "농구";
// console.log(sports);
// // let sports = "배구";
// // SyntaxError: Identifier 'sports' has already been declared
// {
//   let sports = "탁구";
//   console.log(sports);
// }
// 농구
// 탁구
/**
 * 한번 let 변수로 선언한 이름을 같은 스코프에서 다시 같은 이름의 let 변수 선언은 불가능하다.
 * 블록만 있다면 같은 이름의 식별자라도 스코프가 달라서 사용가능하다.
 */
