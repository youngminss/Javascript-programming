/**
 * Merge Sort
 * 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
 * 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
 * 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
 * 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
 * 		+ 빈 결과배열을 생성
 * 		+ 두 개의 left, right 배열이 들어왔고, 먼저, 이 둘의 배열이 둘다 원소가 하나라도 남을때까지 비교하면서
 * 		+ (오름차순 기준) left 와 right 의 맨 앞 원소들의 값을 비교하면서, 작은 값을 shift(=pop[0]) 하면서 result 에 채워넣는다.
 * 		+ 두, left, right 중에 먼저 비워지는 배열이 있을 것이다.
 * 		+ 그럼, 남은 left 나 right 배열에 대해서 남은 원소를 result 배열에 shift 하면서 채원넣고
 * 		+ result 를 반환한다.
 * 합병정렬(merge sort)는, 크게 divide(분할) 과 병합(conquer) 단계가 필요하다.
 * - 재귀적인 작업이므로, 재귀를 이해하면 크게 어렵지 않다.
 * - 실행시간 : O(nlog(n))
 * - 절반씩 나누어 divide
 *
 *
 * Math.floor() : 소수점 버림
 */
{
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    let result = [];

    while (left.length > 0 && right.length > 0) {
      // 내림차순이 되고싶다면, 부등호만 반대로
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  }

  const array = [7, 5, 1, 2, 3, 6, 4];
  const array1 = [4, 2, 6, 1, 3, 5];
  const array2 = [1];

  console.log(mergeSort(array));
  console.log(mergeSort(array1));
  console.log(mergeSort(array2));
}
