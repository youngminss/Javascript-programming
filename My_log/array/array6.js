{
  /**
   * new Array() 배열 생성
   * - 간단하게 대괄호([]) 를 통해 배열을 생성하지만, new Array() 를 통해 배열 인스턴스를 생성할 수도 있음
   * - 대괄호를 통해, 더 짧은 문법으로 배열을 생성할 수 있어서, new Array() 는 잘 쓰진 않음
   * - new Array()에 정수 인수를 통해 생성한 배열은, length 는 인수의 크기와 동일하지만, 내부적으로는 전부 undefined 로 채워진다.
   */
  let arr1 = new Array(5);
  console.log(arr1); // [ <5 empty items> ]
  console.log(arr1[0]); // undefined
  console.log(arr1.length); // 5
  console.clear();

  /**
   * 초기화 된 배열을 쉽게 생성하는 법 (ES6+)
   * - Array.from(new Array().fill())
   */
  let arr2 = Array.from(new Array(5).fill(0));
  console.log(arr2); // [ 0, 0, 0, 0, 0 ]
  console.log(arr2[0]); // 0
  console.log(arr2.length); // 5
  console.clear();

  /**
   * 2차원 배열 초기화
   */
  let arr3 = Array.from(new Array(5), () => new Array(5).fill(0));
  console.log(arr3);
  console.clear();
  // [
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  // ];

  /**
   * toString
   * - 모든 Object 에는 toString 메소드가 존재
   * - 배열에서 toString 은, 호출하면 배열의 요소들을 "쉼표(,)"로 구분한 "문자열"을 반환
   * [참고]
   * - 배열에는 Symbol.toPrimitive 나 valueOf 메소드 존재 X
   * - 따라서, 배열 뒤에, Primitive 값과의 연산이 존재하는 경우
   * - 배열은 String 형태로 변환 뒤 연산된다.
   */
  let arr4 = [1, 2, 3];
  console.log(arr4); // [ 1, 2, 3 ]
  console.log(String(arr4)); // 1,2,3
  console.log(String(arr4) === "1,2,3"); // true
}
