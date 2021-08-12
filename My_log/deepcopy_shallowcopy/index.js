{
  /**
   * 값 복사
   * - 분리된 메모리 공간에, 데이터를 각각 저장(공유 X) 💡
   */
  let num1 = 1;
  let num2 = num1;

  num2 = 2;
  console.log(`num1 : ${num1}, num2 : ${num2}`);
  // num1 : 1, num2 : 2
  // 🔍 원본 데이터 값 보존

  /**
   * 객체 복사 🔍
   * - 동일한 메모리 공간 내, 주소값 데이터에 대해, 동일한 주소값 데이터를 각각 저장(공유 O) 💡
   */
  let person = {
    name: "min",
    job: "developer",
    salary: 5000,
  };
  let clonePerson = person;
  clonePerson.salary = 6000;

  console.log(`Salary - Person : ${person.salary}, ClonePerson : ${clonePerson.salary}`);
  // Salary - Person : 6000, ClonePerson : 6000
  // 🔍 원본 데이터 값 변경됨

  console.clear();

  /**
   * Shallow Copy - Object.assign() 사용
   */
  let myCat = {
    name: "Cash",
    age: 5,
    weight: "3kg",
  };
  let myCat2 = Object.assign({}, myCat);
  myCat2.name = "Rolly";
  myCat2.age = 2;

  console.log(myCat); // { name: 'Cash', age: 5, weight: '3kg' }
  console.log(myCat2); // { name: 'Rolly', age: 2, weight: '3kg' }

  /**
   * Shallow Copy - Spread Operator 사용
   */
  let myCaptin = {
    name: "Iron Man",
    rank: 1,
    gender: "M",
  };
  let myCaptin2 = { ...myCaptin };
  myCaptin2.name = "Captin America";
  myCaptin2.rank = 2;

  console.log(myCaptin); // { name: 'Iron Man', rank: 1, gender: 'M' }
  console.log(myCaptin2); // { name: 'Captin America', rank: 2, gender: 'M' }

  /**
   * Shallow Copy 에 함정
   */
  let myCar = {
    name: "부릉이",
    price: 7000,
    specialMode: {
      mode: "Fly",
    },
  };
  let myCar2 = { ...myCar };
  myCar2.name = "따릉이";
  myCar2.price = 4000;
  myCar2.specialMode.mode = "Dive";

  console.log(myCar); // { name: '부릉이', price: 7000, specialMode: { mode: 'Dive' } }
  console.log(myCar2); // { name: '따릉이', price: 4000, specialMode: { mode: 'Dive' } } 🔍

  // 두 car에 대해 프로퍼티 비교
  console.log(myCar.name == myCar2.name); // false
  console.log(myCar.specialMode == myCar2.specialMode); // true 🔍
  console.log(myCar.specialMode.mode == myCar2.specialMode.mode); // true 🔍

  /**
   * Deep Copy(깊은 복사) - JSON 함수를 이용
   */
  let myFruit = {
    name: "Apple",
    price: 1000,
    characteristic: {
      favor: "Sweet",
    },
  };
  let myFruit2 = JSON.parse(JSON.stringify(myFruit));
  myFruit2.characteristic.favor = "Very Sweet";

  console.log(myFruit); // { name: 'Apple', price: 1000, characteristic: { favor: 'Sweet' } }
  console.log(myFruit2); // { name: 'Apple', price: 1000, characteristic: { favor: 'Very Sweet' } } 🔍

  /**
   * Deep Copy - JSON 함수 사용시 function 누락 현상
   */
  let myObj = {
    name: "obj",
    sayHi: function () {
      console.log("Hello Javascript");
    },
  };
  let copyMyObj = JSON.parse(JSON.stringify(myObj));
  console.log(myObj.sayHi); // [Function: sayHi]
  console.log(copyMyObj.sayHi); // undefined 🔍

  /**
   * Deep Copy(깊은 복사) - lodash 에 cloneDeep 함수를 이용
   * - lodash 라이브러 import 필요
   */

  const _ = require("lodash");

  let myFruit = {
    name: "Apple",
    price: 1000,
    characteristic: {
      favor: "Sweet",
    },
    sayHi: function () {
      console.log("과일이 인사를 하네요.");
    },
  };

  let myFruit2 = _.cloneDeep(myFruit);
  console.log(myFruit);
  // {
  // 	name: 'Apple',
  // 	price: 1000,
  // 	characteristic: { favor: 'Sweet' },
  // 	sayHi: [Function: sayHi]
  // }

  console.log(myFruit2);
  // {
  // 	name: 'Apple',
  // 	price: 1000,
  // 	characteristic: { favor: 'Sweet' },
  // 	sayHi: [Function: sayHi]
  // }

  /**
   * Deep Copy - 재귀를 이용한 직접 구현
   */

  function clone(source) {
    var target = {};
    for (let i in source) {
      if (source[i] != null && typeof source[i] === "object") {
        target[i] = clone(source[i]); // resursion
      } else {
        target[i] = source[i];
      }
    }
    return target;
  }
  let myFruit = {
    name: "Apple",
    price: 1000,
    characteristic: {
      favor: "Sweet",
    },
    sayHi: function () {
      console.log("과일이 인사를 하네요.");
    },
  };
  const myFruit2 = clone(myFruit);

  console.log(myFruit);
  // {
  // 	name: 'Apple',
  // 	price: 1000,
  // 	characteristic: { favor: 'Sweet' },
  // 	sayHi: [Function: sayHi]
  // }

  console.log(myFruit2);
  // {
  // 	name: 'Apple',
  // 	price: 1000,
  // 	characteristic: { favor: 'Sweet' },
  // 	sayHi: [Function: sayHi]
  // }
}
