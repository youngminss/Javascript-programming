{
  let arr1 = [-1, -2, -3, -4, 100];
  /**
   * Array.prototype.every(fn)
   * - 배열에 모든 요소가 조건에 부합하면 true, 아니면 false
   */
  console.log(arr1.every((el) => el > 0)); // false

  /**
   * Array.prototype.some(fn);
   * - 배열에 요소들 중, 하나라도 조건에 부합하면 true, 아니면 false
   */
  console.log(arr1.some((el) => el > 0)); // true
}
