/**
 * quick Sort
 * - Merge Sort 와 비슷하게 분할할 배열의 크기가 1 이하이면 그냐 arr 반환
 * - 그렇지 않으면, 매 차례 pivot(기준)을 정한다.
 * - 이 피봇은 꼭 0번째 원소가 아닌, 다른 인덱스 원소로 해도 무방하다.
 * - left 와 right 배열이 있는데
 * - 0번째 인덱스를 pivot 으로 삼았으니, 1번째 인덱스부터 파라미터 arr 의 길이까지 반복하면서
 * - left 배열은 pivot 보다 작은 원소들
 * - right 배열은 pivot 보다 크거나 같은 원소들이 들어간다.
 * - 이 과정을, 재귀한 결과들을 concat 으로 나열하며 정렬된 새 배열을 만들어 나가 반환하는 것이다.
 *
 * 실행시간 : 최대 - O(nlog(n)) / 최악 - O(n^2)
 * 		+ 최악의 실행시간이 O(n^2) 일 경우는
 * 		+ 미리 정렬된 데이터를 퀵 정렬하려는 경우
 * 		+ 생각해보면, pivot 으로 분류하는 작업이 매번 N, N-1, N-2 ... 번 진행될 것이다.
 * 		+ 즉, left 또는 right 한 배열에 반복적으로 집중되기 때문이다.
 *
 * Array.prototype.concat()
 * -> array1.concat(추가데이터1,추가데이터2...)
 * = 새 배열을 반환
 */
{
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      // 내림차순으로 하고 싶다면 부등호만 반대로
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return quickSort(left).concat(pivot, quickSort(right));
  }
  const array = [7, 5, 1, 2, 3, 6, 4];
  const array1 = [4, 2, 6, 1, 3, 5];
  const array2 = [1];

  console.log(quickSort(array));
  console.log(quickSort(array1));
  console.log(quickSort(array2));
}
