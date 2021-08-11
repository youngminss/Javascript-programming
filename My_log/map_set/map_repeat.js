{
  /**
   * 맵(Map) 의 요소에 반복 작업하기
   * - map.keys() : 각 요소의 "키"만 모은 "반복 가능한(iterable, 이터러블) 객체"를 반환
   * - map.values() : 각 요소의 "값"만 모은 이터러블 객체를 반환
   * - map.entries() : 각 요소의 "[키, 값]을 한 쌍"으로 하느 이터러블 객체를 반환, 해당 이터러블은 for - of 문을 기초롤 쓰인다. 💡
   *
   * map 은 삽입 순서를 기억한다. 🔍
   * - 맵은 값이 삽입된 순서대로 순회를 실시한다.
   * - 객체가 프로퍼티 순서를 기억하지 못하는 것과는 다르다.
   */

  let myFruitAndPriceMap = new Map([
    ["banana", 100],
    ["apple", 200],
    ["kiwi", 300],
  ]);

  for (let fruit of myFruitAndPriceMap.keys()) {
    console.log(fruit);
  }
  // banana
  // apple
  // kiwi

  for (let price of myFruitAndPriceMap.values()) {
    console.log(price);
  }
  // 100
  // 200
  // 300

  for (let item of myFruitAndPriceMap) {
    // == myFruitAndPriceMap.entries()
    console.log(item);
  }
  // 	[ 'banana', 100 ]
  // 	[ 'apple', 200 ]
  // 	[ 'kiwi', 300 ]
  console.clear();

  /**
   * 맵은 "배열"과 유사하게 forEach 문을 지원한다. 💡
   * - map.forEach((value, key, map)) 순서를 지켜줄 것
   */
  myFruitAndPriceMap.forEach((value, key, map) => {
    console.log(`${value} ${key} ${map}`);
  });
  // 	100 banana [object Map]
  // 	200 apple [object Map]
  // 	300 kiwi [object Map]
}
