{
  /**
   * 배열 순회
   */
  let arr1 = [1, 2, 3, 4, 5];

  // 구식 방식
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
  }

  /**
   * for - of 문
   * - "배열"에 적용할 수 있는 또 다른 순회 문법
   * - 현재 요소의 인덱스는 얻을 수 없고, "값" 만 얻을 수 있다. 💡
   */
  for (let el of arr1) {
    console.log(el);
  }
  // 1
  // 2
  // 3
  // 4
  // 5

  /**
   * for - in 문
   * - 배열은 "객체형"에 속하기 때문에, for - in 을 사용하는 것도 가능하긴 함
   * - 그러나, for - in 문은 "모든 프로퍼티"를 대상으로 순회함 💡
   * - 키가 "숫자가 아닌 프로퍼티도 순회 대상에 포함시킴" 💡
   *
   * for - in 문은 다음과 같은 이유로 예기치 못한 문제를 발생하므로 배열객체에는 사용하지 말 것
   * - 배열과 유사한 형태에 "유사 배열(array-like)객체"가 있다.
   * - 유사 배열 객체에는 배열처럼 length 프로퍼티도 있고, 요소마다 인덱스도 붙어있다.
   * - 배열과의 차이점은, "키가 숫자형이 아닌 프로퍼티와 메서드가 있을 수 있다." 💡
   * - 그로인해, array-like 와 for - in 문을 함께 쓰면, 모든 자료형을 대상으로 순회가 이뤄진다.
   * - "필요 없는" 프로퍼티들이 문제를 일으킬 가능성이 있다. 💡
   *
   * - 다른 이유는, for - in 문은 배열이 아닌, "객체"와 함께 사용할 때, "최적화"되어 있다. 💡
   * - 이를 배열에 사용하면, 객체에 사용하는 것에 대비 10~100배 정도 느리다고 한다. 💡
   * - 다만, for - in 문 속도가 대체로 빠른 편이기 때문에 "병목지점"에서만 문제가 된다고 한다.
   */
  for (let el in arr1) {
    console.log(el, arr1[el]);
  }
  // 0 1
  // 1 2
  // 2 3
  // 3 4
  // 4 5
  console.clear();

  /**
   * length 프로퍼티
   * - 배열에 무언가 조작을 가하면 length 프로퍼티는 자동으로 갱신됨 💡
   * - length 프로퍼티는 배열 내 요소의 갯수가 X, 가장 큰 인덱스 + 1 을 의미 💡
   * - 따라서, 배열에 요소가 하나 있고, 이 요소의 인덱스만 엄청 큰 정수라면, 배열의 length 프로퍼티도 매우 커짐
   * - 고로, 이렇게 배열을 사용하지 말자.
   */
  let arr3 = [];
  arr3[100] = 1;
  console.log(arr3); // [ <100 empty items>, 1 ]
  console.log(arr3.length); // 101
  console.clear();
  /**
   * length 프로퍼티는 쓰기(write)가 가능하다. 💡
   * - length 프로퍼티 값을 "수동으로 증가"시키면 아무 일도 일어나진 않음
   * - 그러나 "감소"시키면 배열이 "잘린다."
   * - 짧아진 배열은 "다시 되돌릴 수 없다."
   */
  let arr4 = [1, 2, 3, 4, 5];
  console.log(arr4.length); // 5
  arr4.length = 3;
  console.log(arr4); // [ 1, 2, 3 ]
  arr4.length = 5;
  console.log(arr4); // [ 1, 2, 3, <2 empty items> ] << [4,5] 날라감

  // 배열을 비우는 방법 중 하나. 💡
  arr4.length = 0;
  console.log(arr4); // []
}