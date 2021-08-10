/**
 
 *

 *

 *
 */

{
  /**
   * < 배열 또한 "객체" >
   * - array[0] 같은 인덱스 접근방식 역시, Object 의 { 키 : 값 } 접근 방식과 동일
   * - 다만 키가 "숫자" 라는 점 일뿐 💡
   *
   * < "숫자형 키" 를 사용한다. >
   * - 배열는 이로써, 객체 기본 기능 이외에도 "순서"가 있는 컬렉션을 제어하게 해주는 특별한 메서드들을 제공 💡
   * - length 라는 프로퍼티가 대표적인 예
   * - 이렇듯 JS 의 배열은 일곱가지의 Primitive 자료형에 해당 X, 객체형 O (= 객체처럼 동작)
   */
  let arr1 = ["1"];
  let refArr1 = arr1;

  console.log(arr1 === refArr1);
  refArr1.push("2");
  console.log(arr1); // [ '1', '2' ] => arr1 과 refArr1 은 같은 배열객체를 참조하기 때문(얕은 복사)
  console.clear();

  /**
   * < 배열을 배열 답게 >
   * - JS 엔진은 배열의 요소를 인접한 메모리 공간에 차례로 저장해 연산 속도를 높임 💡
   * - 이외에도 배열 관려 연산 최적화기법은 다양
   * - 다만, 개발자가 이를 모르고 배열을 마치 "순서가 없는" ,"객체"처럼 다루면 이런 기법은 제대로 동작하지 X 💡
   *
   * < 배열 최적화 기법을 손상시키는 동작 > 🔍
   * - 숫자가 아닌 값을 프로퍼티 키로 사용하는 경우
   * 	+ ex) array.test = 5
   * - 실질적인 데이터가 들어간 인덱스 간격이 엄청 클 경우
   * 	+ ex) array[0], array[1000] 외에, 그 사이 요소는 존재하지 X 경우
   * - 요소를 역순으로 채우는 경우
   * 	+ ex) array[100], arr[999], arr[998] ... 순으로 요소를 채우는 경우
   */
  let arr2 = [];
  arr2[99999] = 5;
  arr2.myIdx = 25;
  console.log(arr2); // [ <99999 empty items>, 5, myIdx: 25 ]
}
