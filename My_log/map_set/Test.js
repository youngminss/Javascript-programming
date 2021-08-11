{
  // 1. 배열에서 중복 요소 제거하기
  function unique(arr) {
    return Array.from(new Set(arr));
  }

  let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  console.log(unique(values)); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.
  console.clear();

  // 2. 애너그램 걸러내기
  // "애너그램" : 단어나 문장을 구성하고 있는 문자의 순서를 바꾸거나, 다른 단어나 문장을 만드는 놀이
  function aclean(arr) {
    let result = [];
    let test = new Set();

    for (let item of arr) {
      let lowerCaseItem = item.toLowerCase().split("").sort().join("");
      if (!test.has(lowerCaseItem)) {
        test.add(lowerCaseItem);
        result.push(item);
      }
    }
    return result;
  }
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  console.log(aclean(arr)); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
  console.clear();

  // 3. 반복 가능한 객체의 키
  let map = new Map();
  map.set("name", "John");

  let keys = map.keys();
  keys.push("more"); // Error: keys.push is not a function
  /**
   * 마지막 keys.push 하려고 하면, 에러가 발생한다. 왜 그럴까 ?
   * - map.keys() 의 반환값이 "이터러블 객체"여서 그렇다. "배열이 아니다." 💡
   * - 이를 해결하기 위해서는
   * - let keys = Array.from(map.keys()) 형식을 취해서, iterable 객체 -> Array 로 변형해야 할 것
   */
}
