{
  /**
   * 배열 탐색
   * - Array.prototype.indexOf(item, from) : 배열에 앞에서부터, 해당 요소를 찾으면, 해당 요소의 인덱스를 반환, 없으면 -1 💡
   * - Array.prototype.lastIndexOf(item, from) : 배열에 뒤에서부터, 해당 요소를 찾으면, 해당 요소의 인덱스 반환, 없으면 -1 💡
   * - Array.prototype.includes(item, from) : 해당 요소를 발견하면 true, 없으면 false 💡
   *
   * 같은 이름을 가진 문자열 메소드들과 문법이 동일, 하는 일도 동일 🔍
   * 위에 세 가지 메소드 모두 "항등 연산자(===)"를 사용한다는 점에 유의할 것 🔍
   * 그렇기 때문에, 0 과 false 같은 것을 구분한다. 🔍
   *
   * 요소의 위치를 정확히 알고 싶은 것이 X
   * 배열 내 존재하는지 여부만을 확인하고 싶다 => array.includes 를 사용함
   * - includes 는 NaN 도 판단한다.
   */

  let arr1 = [1, 0, false, 1];
  console.log(arr1.indexOf(0)); // 1
  console.log(arr1.indexOf(false)); // 2
  console.log(arr1.indexOf(null)); // -1
  console.log(arr1.lastIndexOf(1)); // 3
  console.log(arr1.includes(1)); // true
  console.clear();

  let arr2 = [NaN];
  console.log(arr2.indexOf(NaN)); // -1
  console.log(arr2.includes(NaN)); // true
  console.clear();
  /**
	 * "객체"로 이뤄진 배열이 있을 때, "특정 조건"에 부합하는 객체를 배열 내에서 찾고 싶을 경우
   * - Array.prototype.find(function(item, index, array)) : 
   * - Array.prototype.findIndex(function(item, index, array)) : 
	 * 
	 * [기본 문법]
	 * let result = arr.find(function(item, index, array) {
  		true가 반환되면 반복이 멈추고 해당 요소를 반환합니다.
  		조건에 해당하는 요소가 없으면 undefined를 반환합니다.
	 }

	 * 실무에서 객체로 구성된 배열을 다뤄야할 일이 많아서, find 메소드 활용법을 알아두면 좋다.
	 * findIndex 는 find 와 동일하나, 조건에 맞는 요소의 "인덱스"를 반환, 없으면 -1 반환
   */
  let users = [
    { id: 1, name: "May" },
    { id: 2, name: "Jun" },
    { id: 3, name: "July" },
  ];

  let user = users.find((item) => item.id === 2);
  let userIdx = users.findIndex((item) => item.id === 3);
  console.log(user); // { id: 2, name: 'Jun' }
  console.log(userIdx); // 2
  console.clear();

  /**
	 * 조건에 맞는 원소 하나만이 아니라, "여러 개"를 반환받길 웒는 경우
	 * - Array.prototype.filter()
	 * 
	 * let results = arr.filter(function(item, index, array) {
  		// 조건을 충족하는 요소는 results에 순차적으로 더해집니다.
  		// 조건을 충족하는 요소가 하나도 없으면 빈 배열이 반환됩니다.
		});
	*/

  let someUsers = users.filter((item) => item.id < 3);
  console.log(someUsers); // [ { id: 1, name: 'May' }, { id: 2, name: 'Jun' } ]
}
