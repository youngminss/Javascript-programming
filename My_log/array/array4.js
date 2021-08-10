{
  /**
   * push, pop 은 빠르지만, shift, unshift 는 느리다.(배열 원소가 기하급수적으로 증가할수록 차이는 커짐)
   * - push, pop은, 배열에 마지막에 원소를 넣거나 빼기 때문에 "추가적인 인덱스 및 요소의 이동이 없다." 💡
   * - 그러나 shift, unshift는 배열의 맨앞 요소를 넣거나 뺀 후에 "추가적인 인덱스 및 요소의 이동이 필요하다." 💡
   *
   * shift, unshift 동작방식
   * - 인덱스가 0 인 요소를 추가 or 제거한다.
   * - 모든 요소를 왼쪽(제거 시) or 오른쪽(추가 시)으로 이동
   * - length 프로퍼티 값을 갱신
   */

  let arr1 = [];
  let start = new Date();
  for (let i = 0; i < 10000; i++) {
    arr1.push(i);
  }
  let end = new Date();
  console.log(`push : ${end - start}ms`); // push : 1ms

  start = new Date();
  let arr2 = [];
  for (let i = 0; i < 10000; i++) {
    arr2.unshift(i);
  }
  end = new Date();
  console.log(`unshift : ${end - start}ms`); // unshift : 17ms
}
