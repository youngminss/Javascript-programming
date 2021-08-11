{
  /**
   * set 자료형, 반복 작업하기
   * - for - of 문, forEach 문을 지원한다.
   *
   * set.forEach((value, valueAgain, set)) 에 형태를 가진다.
   * - 순서대로, (값, 값, 목표하는 객체)
   * - 동일한 "값" 인자가 반복되는 것을 볼 수 있다. 🔍
   * - 이것은 "맵(Map)"과의 호환성 때문이다. 💡
   * - map 에서 map.forEach((value, key, map)) 인 콜백이 3개의 인자를 받을 때를 위해서라고 한다.
   * - 그냥, 일반화되어 사용하기때문에 받아들일 것
   *
   * set 에서도 반복 작업 메서드 지원한다.
   * - set.keys() : 셋 내의 모든 "값"을 포함하는 이터러블 객체를 반환
   * - set.values() : set.keys() 와 동일한 작업을 한다. 단지 맵(Map)과의 호환성을 위해 만들어진 메소드
   * - set.entries() : 셋 내의 각 값을 이용해 만든 "[value, value] 배열"을 포함하는 "이터러블 객체"를 반환, 역시 맵(Map)과의 호환성을 위해 만들어졌다.
   */
  let set = new Set(["one", "two", "three"]);

  for (let value of set) {
    // == set.entries()
    console.log(value);
  }
  // one
  // two
  // three

  for (let value of set.values()) {
    console.log(value);
  }
  // one
  // two
  // three

  for (let value of set.keys()) {
    console.log(value);
  }
  // one
  // two
  // three
}
