{
  /**
   * 배열 생성 기초
   */
  let arr1 = new Array(1, 2, 3);
  let arr2 = ["one", "two", "three"];

  console.log(arr1); // [ 1, 2, 3 ]
  console.log(arr2); // ["one", "two", "three"]
  console.clear();

  /**
   * 배열 수정, 추가, length
   */
  arr1[10] = 4;
  console.log(arr1); // [ 1, 2, 3, <7 empty items>, 4
  console.log(arr1.length); // 11
  console.clear();

  /**
   * JS 배열 요소의 자료형 제약은 없다.
   */
  let arr3 = [
    "1",
    1,
    true,
    { one: 1 },
    function () {
      return 1;
    },
  ];
  console.log(arr3); // [ '1', 1, true, { one: 1 }, [Function (anonymous)] ]
}
