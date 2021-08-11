{
  /**
   *  함수를 객체의 프로퍼티처럼 사용가능
   */
  let obj = {
    name: "min",
    sayHi: function () {
      console.log("안녕하세요 :)");
    },
  };

  obj.sayHi(); // 안녕하세요 :)
  console.clear();

  /**
   * Object Wrapper(래퍼 객체) 예시
   */
  let greeting = "Hello";
  console.log(greeting.toUpperCase()); // HELLO
  console.clear();

  /**
   * JS에서, 원시값(특히, Number, String, Boolean)에 대한 생성자(new)를 통해 "래퍼 객체"를 만들 경우, 유의점
   */

  // 1. 같은 숫자인지 알아서, 타입을 까보니 다르다 !
  console.log(typeof 0); // number
  console.log(typeof new Number(0)); //	object 🔍

  // 2. 논리연산 시, 항상 "참"을 반환한다 !
  let zero = new Number(0);
  if (zero) {
    console.log(`zero : ${zero} ${typeof zero}`); // zero : 0 object 🔍(마지막 object 주의!)
  }

  // 예외) new(생성자 키워드)만 붙이지 않으면, object 생성으로 인식하지 않기 때문에 괜찮다. 🔍
  let one = Number("1");
  console.log(`one : ${one} ${typeof one}`); // one : 1 number 🔍(new 키워드가 없고, 단지 타입을 변환했고, 고로 'number'라는 타입으로 측정)
}
