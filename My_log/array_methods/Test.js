{
  // 1. border-left-width를 borderLeftWidth로 변경하기
  function camelize(str) {
    let splited_Str = str.split("-");
    result = splited_Str[0];
    for (let i = 1; i < splited_Str.length; i++) {
      result += splited_Str[i][0].toUpperCase() + splited_Str[i].slice(1);
    }
    return result;
  }
  console.log(camelize("background-color")); // "backgroundColor";
  console.log(camelize("list-style-image")); // "listStyleImage";
  console.log(camelize("-webkit-transition")); // "WebkitTransition";
  console.clear();

  // 2. 특정 범위에 속하는 요소 찾기
  function filterRange(arr, a, b) {
    return arr.filter((el) => el >= a && el <= b);
  }
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  console.log(filtered); // [ 3, 1 ]
  console.log(arr); //  [ 5, 3, 8, 1 ]
  console.clear();

  // 3. 특정 범위에 속하는 요소 찾기(배열 변경하기)
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || b < arr[i]) {
        arr.splice(i, 1);
      }
    }
  }
  let arr1 = [5, 3, 8, 1];
  filterRangeInPlace(arr1, 1, 4);
  console.log(arr1);
  console.clear();

  // 4. 내림차순으로 정렬하기
  let arr2 = [5, 2, 1, -10, 8];
  arr2.sort((a, b) => (a < b ? 1 : -1));
  console.log(arr2);
  console.clear();

  // 5. 배열 복사본을 정렬하기
  function copySorted(arr3) {
    let result = arr3.slice();
    return result.sort();
  }
  let arr3 = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr3);
  console.log(sorted);
  console.log(arr3);
  console.clear();

  // 6. 확장 가능한 계산기
  class Calculator {
    operation;
    constructor() {
      this.operation = "+-";
    }

    calculate(str) {
      let [left, op, right] = str.split(" ");
      left = parseInt(left);
      right = parseInt(right);
      if (!this.operation.includes(op)) {
        throw new Error(`지원하는 연산자가 아닙니다 : ${op}`);
      }
      let result;
      switch (op) {
        case "+":
          result = left + right;
          break;
        case "-":
          result = left - right;
          break;
        case "*":
          result = left * right;
          break;
        case "/":
          result = Math.floor(left / right);
          break;
        case "**":
          result = Math.pow(left, right);
          break;
        default:
          throw new Error(`올바른 수식이 아닙니다 : ${(left, op, right)}`);
      }
      return result;
    }
    addMethod(op, fn) {
      if ("*/**".includes(op) && !this.operation.includes(op)) {
        this.operation += op;
      }
    }
  }
  let calc = new Calculator();
  console.log(calc.calculate("3 + 7"));

  calc.addMethod("*", (a, b) => a * b);
  console.log(calc.calculate("3 * 7"));
  console.clear();

  // 7. 이름 매핑하기
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let users = [john, pete, mary];

  let names = users.map((el) => el.name);
  console.log(names);
  console.clear();

  // 8. 객체 매핑하기
  let john1 = { name: "John", surname: "Smith", id: 1 };
  let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
  let mary1 = { name: "Mary", surname: "Key", id: 3 };

  let users1 = [john1, pete1, mary1];

  let usersMapped = users1.map((el) => {
    return {
      fullName: `${el.name} ${el.surname}`,
      id: el.id,
    };
  });

  console.log(usersMapped[0].id); // 1
  console.log(usersMapped[0].fullName); // John Smith
  console.clear();

  // 9. 평균 나이 구하기
  function getAverageAge(arr) {
    return arr.reduce((totalAge, currentUser) => (totalAge += currentUser.age), 0) / arr.length;
  }
  let john2 = { name: "John", age: 25 };
  let pete2 = { name: "Pete", age: 30 };
  let mary2 = { name: "Mary", age: 29 };
  let arr4 = [john2, pete2, mary2];
  console.log(getAverageAge(arr4)); // (25 + 30 + 29) / 3 = 28
  console.clear();

  // 10. 중복 없는 요소 찾아내기
  function unique(arr) {
    let result = [];
    for (let name of arr) {
      if (!result.includes(name)) {
        result.push(name);
      }
    }
    return result;
  }

  let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  console.log(unique(strings)); // Hare, Krishna, :-O
  console.clear();
}
