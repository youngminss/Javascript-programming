{
  /**
   * 맵(Map) 자료형
   * - "키"가 있는 데이터를 저장한다는 것은 "Object"와 유사함, 다만 맵은 키에 "다양한 자료형"을 허용한다. 💡
   *
   * 맵 프로퍼티s
   * - new Map() : 맵 생성
   * - map.set(key, value) : key를 이용해 value 저장
   * - map.get(key) : key에 해당하는 값을 반환, key가 존재하지 않으면, undefinde
   * - map.has(key) : key 가 존재하면 true, 아니면 false
   * - map.delete(key) : key 에 해당하는 "값을 삭제"
   * - map.clear() : 맵 안에 모든 요소를 제거
   * - map.size : 맵 요소의 개수를 반환
   *
   * 맵 사용시, 유의점 🔍
   * - map[key] 형식을 사용하지 않도록 한다.
   * - 사용할 수 있긴 하나, 이는 곧 map을 "일반 객체"처럼 취급하게 된다. 고로 여러 제약이 발생한다.
   * - map을 사용할 때는, map 전용 메서드 set, get 등을 사용할 것 💡
   */

  let map = new Map();

  console.log(map); // Map(0) {}
  map.set("100", "문자 백");
  map.set(100, "숫자 백");
  map.set(true, "불리언 true");
  console.log(map); // Map(3) { '100' => '문자 백', 100 => '숫자 백', true => '불리언 true' }

  console.log(map.get("100")); // 문자 백
  console.log(map.get(100)); // 숫자 백
  console.log(map.get(true)); // 불리언 true
  console.log(map.get(false)); // undefined	🔍
  console.log(map.size); // 3
  console.clear();

  /**
   * Map 은 키로 "객체"를 허용한다. 🔍
   * - "객체"를 키로 사용할 수 있다는 점은 map 의 가장 중요한 기능 중 하나이다. 💡
   * - "객체" 자료형은 "문자열 키"를 사용하지, 객체 키는 사용할 수 없다.
   * - "객체" 자료형에 객체를 키로 사용할 경우, 문자열로 변환되어 "[object Object]" 로 저장된다. 🔍
   * - 이 경우, 객체 자료형에 객체를 연속으로 넣을 경우, 가장 마지막 데이터로만 덮어 저장된다. 💡
   */
  let man = { name: "min" };

  let myMap = new Map();
  myMap.set(man, 100);
  console.log(myMap.get(man)); // 100
  console.log(myMap); // Map(1) { { name: 'min' } => 100 }

  let myObj = {};
  myObj[man] = 100;
  console.log(myObj[man]); // 100 << 100이 나오긴 함
  console.log(myObj); // { '[object Object]': 100 } << 키가 "[object Object]" 문자열임 🔍
  console.clear();
  /**
   * map 이 키를 비교하는 방식
   * - SameValueZero 라고 불리는 알고리즘을 사용해 값의 등가 여부를 확인한다.
   * - 이 알고리즘은 ===(일치 연산자)와 "거의 유사"하지만, NaN 과 NaN 을 같다고 취급한다.(원래 일치연산자에서 NaN 과 NaN 은 같지 X) 💡
   * - 이 알고리즘은 일반화되어 있어, 커스터마이징 하는 것은 불가능
   *
   * 체이닝
   * - map.set 을 호출할 때마다 맵 자신이 반환된다.
   * - 이를 이용해 map.set 을 "체이닝(Chaining)"할 수 있다.
   */

  let myMap2 = new Map();
  myMap2.set(1, "1").set(2, "2").set(3, "3");
  console.log(myMap2); // Map(3) { 1 => '1', 2 => '2', 3 => '3' }
  console.clear();
}
