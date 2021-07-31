/**
 * 원본 배열, 복사본을 통한 순회로 변경된 배열이 있을 때
 * 순회하며 abs 배열 만드는 과정방법
 * - (나) map 함수
 * - (해설) for - in 문
 *
 * abs 배열에서 최소값 뽑아내기
 * - (나) Math.min(...abs배열) => spread 연산자로 배열원소 풀어주기
 * - (해설) Math.min.apply(null, abs배열) => Math.min 함수를 abs배열에 apply 함
 * [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
 *
 * 특정 값이 배열 내에 존재하는지 인덱스찾기
 * - Array.indexOf(찾을 값) => 찾으면 해당인덱스,없으면 -1
 * [참고](https://hianna.tistory.com/404)
 *
 */

{
  function rotate(inL, inN) {
    let copyinL = [...inL];
    for (let i = 0; i < inN; i++) {
      const lastElement = copyinL.pop();
      copyinL.unshift(lastElement);
    }
    let substractAbsInLCopyInL = inL.map((el, idx) => Math.abs(inL[idx] - copyinL[idx]));
    let minIdx = substractAbsInLCopyInL.indexOf(Math.min(...substractAbsInLCopyInL));

    console.log(Math.min.apply(null, inL));
    console.log(`index : ${minIdx}`);
    console.log(`value : ${inL[minIdx]}, ${copyinL[minIdx]}`);
  }
  rotate([1, 6, 4, 2, 7], 2);
}

// [1,2,3,4,5]
// [1,6,4,2,7]
