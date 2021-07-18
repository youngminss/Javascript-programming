/**
 * 버블정렬 구현
 */
{
  function bubbleSort(arr) {
    // 원본 대신 복사본을 사용하는 것이 좋다.
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - i; j++) {
        if (result[j] > result[j + 1]) {
          let temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
    return result;
  }
  console.log(bubbleSort([4, 2, 3, 8, 5]));
}
