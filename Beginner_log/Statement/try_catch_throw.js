// ====== try-catch ======
var value;
try {
  value = ball;
} catch (error) {
  console.log("catch 실행");
}
// catch 실행
/**
 * value = ball 에서 에러가 발생한다.
 * catch 에서 error를 감지하고 내부 블록을 실행한다.
 */

var sports;
try {
  sports = ball;
} catch (error) {
  console.log("catch 실행");
} finally {
  console.log("finally 도 실행");
}
// catch 실행
// finally 도 실행
/**
 * finally는 try(성공)가 실행되던 catch(실패)가 실행되던, 마지막에 반드시 실행된다.
 */

// ===== throw =====
try {
  throw "예외 발생시켰다.";
  var sports = "스포츠";
} catch (error) {
  console.log(error);
  console.log(sports);
}
// 예외 발생시켰다.
// undefined
/**
 * try 첫 문장에서 throw 키워드 발생
 * catch에서 throw(던진) 에러를 잡고, 내부 블록을 실행
 * 이때 error는 throw에서 던진 내용이다.
 * 그리고, 다음 문장에 있던, sports 변수의 값은 적용되지 않아 출력해보면 undefined 이다.
 */

try {
  throw {
    msg: "예외 msg",
    code: "1234567",
  };
} catch (err) {
  console.log(err.msg);
  console.log(err.code);
}
// 예외 msg
// 1234567
/**
 * throw는 "프로퍼티" 형식으로도 예외를 발생시킬 수 있다.
 */

try {
  throw new Error("예외 발생시킴");
} catch (err) {
  console.log(err.message);
}
// 예외 발생시킴
/**
 * throw 를 할 예외를 new 키워드를 통해 Error Object를 생성한 것
 * 파라미터로 예외 메시지를 넘겼고
 * catch 에서, Error 객체의 message 메소드로 에러 메시지 출력한 것
 */
