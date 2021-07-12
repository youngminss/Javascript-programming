// ===== const 변수 =====
// const sports = "축구";
// try {
//   sports = "농구";
// } catch (e) {
//   console.log("const 할당 불가");
// }
// const 할당 불가
/**
 * const 변수로 sports 선언
 * 이후에, sports 변수에 값을 변경하려고 하면 에러발생
 * catch 문에서 이를 잡아낸 상황
 */

// ===== const 여도 Object 의 프로퍼티 값은 변경 가능 =====
// const book = { title: "책" };
// try {
//   book = { title: "음악 책" };
// } catch (e) {
//   console.log("const 전체 할당은 불가");
// }
// book.title = "미술 책";
// console.log(book.title);
// const 전체 할당은 불가
// 미술 책
/**
 * book 오브젝트의 전체 할당은 안됌
 * 오브젝트의 특정 프로퍼티는 변경가능
 */

// ===== const 여도 Array 의 원소 값은 변경 가능 =====
// const book = ["책"];
// try {
//   book = ["음악 책"];
// } catch (e) {
//   console.log("const 전체 할당 불가");
// }
// book[0] = "미술 책";
// console.log(book[0]);
// const 전체 할당 불가
// 미술 책
/**
 * book Array 오브젝트의 전체 할당은 안됌
 * Array 의 특정 원소 값은 변경가능
 */
