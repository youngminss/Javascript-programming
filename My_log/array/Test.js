{
  /**
   * 1. 배열은 복사가 될까요 ?
   */
  let fruits = ["사과", "배", "오렌지"];

  // 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
  let shoppingCart = fruits;
  shoppingCart.push("바나나");

  // fruits에 어떤 값이 들어 있을까요?
  console.log(fruits.length); // 4 (같은 배열객체를 참조함, 얕은복사(Shallow Copy))
  console.clear();

  /**
   * 2. 배열과 관련된 연산
   */
  let styles = ["Jazz", "Blues"];
  console.log(styles);
  styles.push("Rock-n-Roll");
  console.log(styles);
  styles[Math.floor(styles.length / 2)] = "Classics";
  console.log(styles);
  console.log(styles.shift());
  console.log(styles);
  styles.unshift("Rap", "Reggae");
  console.log(styles);
  console.clear();

  /**
   * 3. 배열 컨텍스트에서 함수 호출하기
   * - obj[method]() 를 호출하는 것과 문법적으로 동일
   * - 즉, 아래 예시에서, arr[2]에 있는 함수가 "객체 메소드"처럼 호출되는 것
   * - 따라서, arr[2] 는 arr 를 참조하는 this 를 받고, 배열을 출력함
   */
  let arr = ["a", "b"];

  arr.push(function () {
    console.log(this);
  });

  arr[2](); // [Function (anonymous)]
  console.log(arr[2] instanceof Function); // true
  console.clear();

  /**
   * 4. 최대합 부분배열 구하기
   * - O(n^2) or O(n) 실행시간 풀이 중
   * - O(n) 시간으로 풀이
   */

  function getSubArrSum(subArr) {
    return subArr.reduce((total, el) => (total += el), 0);
  }
  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let el of arr) {
      partialSum += el;
      maxSum = Math.max(maxSum, partialSum);
      if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
  }
  console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
  console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
  console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
  console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
  console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
  console.log(getMaxSubSum([1, 2, 3])); // 6
}
