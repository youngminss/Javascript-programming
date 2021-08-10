{
  /**
	 * JS, 배열을 변형시키거나, 재정렬해주는 메서드
	 * - Array.prototype.map()	💡
	 * - Array.prototype.sort(fn) 💡
	 * 
	 * map
	 * - 유용성과 사용 빈도가 아주 높은 메소드 
	 * - 배열 요소 전체를 대상으로 함수를 호출, 함수 호출 결과를 배열로 반환 🔍
	 * 
	 * [기본 문법]
	 * let result = arr.map(function(item, index, array) {
  		// 요소 대신 새로운 값을 반환합니다.
			});
	 *
	 */
  let arr1 = [1, 2, 3, 4, 5];
  let result = arr1.map((el) => el * 2);
  console.log(result); // [ 2, 4, 6, 8, 10 ]
  console.clear();

  /**
   * Array.prototype.sort(fn) 💡
   * - 배열의 요소를 정렬해준다.
   * - 배열 자체가 변경된다. 🔍
   * - 기본 정렬 기준은 "유니코드" 순서에 따라 정렬된다. 🔍
   * - 새로운 정렬 기준을 만들려면, 기준 function 을 넘겨줘야한다. 🔍
	 * 
   * function compare(a, b) {
			if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
			if (a == b) return 0; // 두 값이 같은 경우
			if (a < b) return -1; //  첫 번째 값이 두 번째 값보다 작은 경우
		}
	 *
	 * Array 에는 숫자, 문자열, 객체 등 정해진 것이 아닌, 알 수 없는 "무언가"로 구성된 집합이 된다.
	 * 이 "비 동질적인" 집합을 정렬해야 한다고 가정해보자.
	 * 무언가를 정렬하려면 "기준"이 필요하다. 이때 정렬 기준을 정의해주는 함수(ordering function, 정렬 함수)가 필요
	 * - sort() 메소드는 최적화된 "Quick Sort(퀵 소트)"를 사용한다. 🔍
	 * - sort() 는 주어진 함수를 사용해, 정렬 기준을 만들고 이 기준에 따라 요소들을 재배열하므로, 개발자는 내부 정렬 동작원리를 알 필요가 없다.
	 * - function 을 만들고, 이를 인수로 넘겨주는 것만 해주면 된다.
   */

  let arr2 = [7, 3, 1];
  arr2.sort(function (a, b) {
    return a - b;
  });
  console.log(arr2); // [ 1, 3, 7 ]

  let arr3 = [5, 4, 3, 2, 1];
  arr3.sort((a, b) => a - b);
  console.log(arr3); // [ 1, 2, 3, 4, 5 ]

  let arr4 = ["Österreich", "Andorra", "Vietnam"];
  console.log(arr4.sort((a, b) => (a > b ? 1 : 1))); // [ 'Österreich', 'Andorra', 'Vietnam' ] << 틀림
  console.log(arr4.sort((a, b) => a.localeCompare(b))); // [ 'Andorra', 'Österreich', 'Vietnam' ] << 맞음
  console.clear();

  /**
   * 배열의 요소를 역순으로 정렬시켜주는 메소드
   * - Array.prototype.reverse() 💡
   *
   * 반환 값은 "재정렬된 배열"
   */
  let arr5 = [1, 2, 5, 6, 1];
  arr5.reverse();
  console.log(arr5); // [ 1, 6, 5, 2, 1 ]
  console.clear();

  /**
   * - Array.prototype.split(delim) : 문자열을 분리 => 배열로 💡
   * - Array.prototype.join(gule) : 배열을 합쳐서 => 문자열로 💡
   */

  let names = "May, Jun, July";
  let arr6 = names.split(", ");
  console.log(arr6); // [ 'May', 'Jun', 'July' ]

  let test = "test";
  console.log(test.split("")); // [ 't', 'e', 's', 't' ]
  console.log(["t", "e", "s", "t"].join("")); // test
  console.clear();

  /**
	 * 배열을 기반으로 "값 하나를 도출할 때 사용"
	 * let value = arr.reduce(function(accumulator, item, index, array) {
  		// ...
			}, [initial]); 💡
	 * 
	 * accumulator : 이전 함수 호추르이 결과, initial은 함수 최초 호출시 사용되는 초깃값을 나타냄(옵션)
	 * item : 현재 배열 요소
	 * 
	 * - 이전 함수 호출 결과 -> 다음 함수를 호출 시, 첫 번째(accumulator) 인수(= previousValue) 로 사용
	 * - 마지막 함수까지 호출되면 이 값은 reduce 의 반환 값이 된다.
	 * - 맨 마지막 인자(초기값)는 생략해도 된다.
	 * - 단, 생략하는데, 배열이 비어있다 => 에러발생 🔍
	 * - 그렇기 때문에, 초기값은 그냥, "명시" 하는 것이 좋다.
	 */

  let arr7 = [1, 2, 3, 4, 5];
  let result7 = arr7.reduce((sum, current) => sum + current, 0);
  console.log(result7); // 15

  // let arr8 = [];
  // // TypeError: Reduce of empty array with no initial value
  // // 초깃값을 설정해 주었다면 초깃값이 반환되었을 겁니다.
  // arr8.reduce((sum, current) => sum + current);
}
