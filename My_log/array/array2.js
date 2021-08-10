{
  /**
   * JS 배열, queue, stack
   * - queue = push(), shift()
   * - stack = push(), pop()
   */

  /**
   * 배열 끝에 무언가를 하는 메서드
   * - push() = 한꺼번에 여러개 추가가능
   * - pop()
   *
   * - arr.push(값s) == arr[arr.length] = 값s
   */

  let arr1 = [1, 2, 3, 4];
  arr1.push("5");
  console.log(arr1); // [ 1, 2, 3, 4, '5' ]
  const popData1 = arr1.pop();
  console.log(arr1, popData1); // [ 1, 2, 3, 4 ] 5
  console.clear();

  /**
   * 배열 앞에 무언가를 하는 메서드
   * - shift()
   * - unshift() : 한꺼번에 여러개 추가가능
   */
  let arr2 = ["one", "two", "three"];
  arr2.unshift("zero");
  console.log(arr2); // [ 'zero', 'one', 'two', 'three' ]
  const popData2 = arr2.shift();
  console.log(arr2, popData2); // [ 'one', 'two', 'three' ] zero
}
