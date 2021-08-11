{
  /**
   * 셋(Set) 자료형
   * - 중복을 허용하지 않는 "값"만을 모아놓은 특별한 "컬렉션" 💡
   *
   * set 주요 메소드, 프로퍼티
   * - new Set(iterable) : 셋 생성, "이터러블" 객체를 전달받으면(대게 "배열"을 전달받음) 그 안의 값을 복사해 셋에 넣어준다.
   * - set.add(value) : 값을 추가하고, "셋 자신을 반환"
   * - set.delete(value) : 값을 제거한다. 호출 시점에 셋 내에 "값이 있어서 제거에 성공하면 true, 아니면 false 반환"
   * - set.clear() : 셋을 비운다.
   * - set.size : 셋에 몇 개의 값이 존재하는지 반환
   *
   * 셋(Set) 과 배열(Array) 에 중복 여부 판단에서의 차이점 🔍
   * - 중복 값 여부는 Array 메소드인 arr.find 를 이용해 확인 할 수도 있음
   * - 하지만, arr.find 는 "배열 내 요소 전체"를 뒤져 중복 값을 찾는다.
   * - 때문에, Set 보다 성능면에서 떨어진다.
   * - Set 이 값의 중복을 허용하지 않는다는 성질 덕분에 중복 값 여부를 판단하는데 최적화 되어있다.
   */

  let mySet = new Set();

  let man1 = { name: "one" };
  let man2 = { name: "two" };
  let man3 = { name: "three" };

  mySet.add(man1);
  mySet.add(man2);
  mySet.add(man2);
  mySet.add(man3);
  mySet.add(man3);
  mySet.add(man3);

  console.log(mySet.size); // 3
  for (let man of mySet) {
    console.log(man.name);
  }
  // one
  // two
  // three
  console.clear();
}
