{
  /**
   * Array.prototype.splice() 💡
   * - 배열 요소의 추가,삭제,교체 모두 가능
   * - 삭제된 요소로 이뤄진 배열을 따로 반환해준다.
   * - 음수 인덱싱도 가능함
   *
   * [기본 문법]
   * arr.splice(index[, deleteCount, elem1, ..., elemN])
   */
  let arr = ["I", "Love", "Me"];
  console.log(arr); // [ 'I', 'Love', 'Me' ]
  let removeData = arr.splice(2, 1, "You");
  console.log(removeData); // [ 'Me' ]
  console.log(arr); // [ 'I', 'Love', 'You' ]
  console.clear();

  /**
   * Array.prototype.slice() 💡
   * - 시작인덱스 ~ 끝인덱스-1 까지의 원본 배열을 복사한 새로운 배열을 반환
   * - 역시, 음수 인덱싱 가능(이 때는 음수 인덱스 ~ 끝까지)
   * - 문자열 메소드인 String.prototype.slice() 와 유사하게 동작
   * - 서브 문자열(substring) 대신, 서브 배열(subarray)을 반환한다는 점이 다름
   * - arr.slice() 처럼, 인수를 하나도 넘기지 않기도 함 ( 많이 사용 ) 🔍
   * - 이 방식은, "새로운 배열"을 생성하는 방법 중에 하나 이므로 자주 사용
   *
   * [기본 문법]
   * arr.slice([start], [end])
   */
  let arr2 = ["1", "2", "3", "4"];
  console.log(arr2.slice(1, 3)); // [ '2', '3' ]
  console.log(arr2.slice(-2)); // [ '3', '4' ]
  console.clear();

  /**
   * Array.prototype.concat() 💡
   * - 기존 배열의 요소를 사용해, "새로운 배열"을 만들거나, 기존 배열에 요소를 추가하고자 할 때 사용
   *
   * [기본 문법]
   * - arr.concat(arg1, arg2...)
   * - 인수에는 "배열"이나 "값"이 올 수 있다. 갯수 제한은 없다.
   * - 인수로 "객체"가 넘어오면(유사 배열객체라도), 객체는 "분해 되지 않고 통으로 복사"되어 더해짐 🔍
   * - 그런데, 유사 배열 객체에 "특수한 프로퍼티", "Symbol.isConcatSpreadable" 이 존재하면, concat 은 이 객체를 "배열처럼 취급"
   * - 따라서, 객체 프로퍼티의 값이 더해진다.
   *
   * [참고]
   * SymbolConstructor.isConcatSpreadable: typeof Symbol.isConcatSpreadable
   * - A Boolean value that if true indicates that an object should flatten to its array elements by Array.prototype.concat.
   */
  let arr3 = [1, 2];
  let arrayLike = {
    0: "something",
    length: 1,
  };
  console.log(arr3.concat(arrayLike)); // [ 1, 2, { '0': 'something', length: 1 } ]

  let arr4 = [1, 2];
  let arrayLike2 = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
  };
  console.log(arr4.concat(arrayLike2)); // [ 1, 2, 'something', 'else' ]
  console.clear();

  /**
   * forEach 로 반복작업 하기
   * - 주어진 함수를, 배열 요소 각각에 대해 실행할 수 있게 해준다.
   */
  [1, 2, 3, 4, 5].forEach((el, idx) => {
    console.log(el, idx);
  });
  // 1 0
  // 2 1
  // 3 2
  // 4 3
  // 5 4
  console.clear();
}
