{
  /**
   * 객체 => 맵으로 변형
   * - Object.entries() : 각  요소가 키-값 쌍인 "배열"이나 "이터러블 객체를 초기화 용도"로 map에 전달해 새로운 "맵(map)"을 만든다. 🔍
   *
   * "평범한 객체"를 가지고 map을 만들고 싶다면, 내장 메소드 Object.entries(obj)를 활용할 것
   * - 이 메소드는 객체의 "키-값" 쌍을 요소([key, value])로 가지는 "배열"을 반환한다. 💡
   *
   */
  let map = new Map([
    ["1", "문자 1"],
    [1, "숫자 1"],
    [true, "불리언 true"],
  ]);
  console.log(map.get(1)); // 숫자 1

  let obj = {
    name: "min",
    age: 100,
  };
  let fromObjToMap = new Map(Object.entries(obj));
  console.log(fromObjToMap.get("name")); // min
  console.clear();

  /**
   * 맵 => 객체로 변형
   * - Object.fromEntries() : 각 요소가 [키,값] 쌍은 "배열"을 "객체"로 바꿔준다.
   *
   * - map.entries()를 호출하면, 맵의 [키,값]을 요소로 가지는 "이터러블"을 반환한다고 했다.
   * - 이터러블(or 배열형태) 형태는, Object.fromEntries() 를 사용하기 위해 딱 맞는 형태이다.
   *
   */
  let fruitAndPrice = Object.fromEntries([
    ["banana", 100],
    ["apple", 200],
    ["berry", 300],
  ]);
  console.log(fruitAndPrice); // { banana: 100, apple: 200, berry: 300 }

  let myMap = new Map();
  myMap.set("banana", 100).set("apple", 200).set("berry", 300);

  let fromMyMapToObj = Object.fromEntries(myMap.entries()); // myMap 을 인자로 넘기면 더 간결하다. (for - of 문에서 동일하게 사용한 것과 같은 개념)
  console.log(fromMyMapToObj); //  banana: 100, apple: 200, berry: 300 }
}
