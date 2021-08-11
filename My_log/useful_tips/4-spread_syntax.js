{
  /**
   * Spread Syntax
   * - 기존에 데이터가 담겨있는 "배열"이나 "객체"에 변경을
   * - 기존에 배열이나 객체가 아닌, "새로운" 배열이나 객체에 적용하고 싶을 때는 복사본을 만들어야 한다. 🔍
   * - 이를 간단하게 할 수 있는 방법이 Spread Syntax
   *
   * 유의할 점
   * - spread 하는 요소의 값은, 가장 마지막에 등장한 요소의 값을 기준으로 설정됨 🔍
   *
   * [참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   */
  const item = { type: "one", size: 1 };
  const detail = { price: 100, made: "Korea", gender: "M" };

  // Bad1 💩
  const newObj = new Object();
  newObj["type"] = item.type;
  newObj["size"] = item.size;
  newObj["price"] = detail.price;
  newObj["made"] = detail.made;
  newObj["gender"] = detail.gender;
  console.log(newObj); // { type: 'one', size: 1, price: 100, made: 'Korea', gender: 'M' }

  // Bad2 💩
  const newObj2 = {
    type: item.type,
    size: item.size,
    price: detail.price,
    made: detail.made,
    gender: detail.gender,
  };
  console.log(newObj2); // { type: 'one', size: 1, price: 100, made: 'Korea', gender: 'M' }

  // Good 👍
  const newObj3 = Object.assign(item, detail);
  console.log(newObj3); // { type: 'one', size: 1, price: 100, made: 'Korea', gender: 'M' }

  // Best 👍
  const newObj4 = { ...item, ...detail };
  console.log(newObj4); // { type: 'one', size: 1, price: 100, made: 'Korea', gender: 'M' }
  console.clear();

  /**
   * 배열도 가능
   */
  let myArray = [1, 2, 3];

  /**
   * 배열에 요소추가
   */
  // myArray.push(4)
  myArray = [...myArray, 4];

  /**
   * 기존 여러 배열을 하나로 합친 새로운 배열
   */
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  // let newArray = arr1.concat(arr2)
  let newArray = [...arr1, ...arr2];
  console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
}
