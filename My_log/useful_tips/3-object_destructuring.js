{
  /**
   * Object Destructuring (구조 분해 할당)
   * - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
   * - 객체를 Object Destructuring 할 때에는, 분해해서 받는 변수의 이름을, 객체에 키 이름과 같게해야한다.
   * - 이름을 커스터마이징 할 수도 있다.
   *
   * [참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   */

  function displayName(name) {
    console.log(name);
  }
  function displayAge(age) {
    console.log(age);
  }
  function displayPhoneNumber(phoneNumber) {
    console.log(phoneNumber);
  }

  // Bad 1 💩
  const person = {
    name: "min",
    age: 100,
    phone: "010-1234-5678",
  };

  function displayPerson1(person) {
    displayName(person.name);
    displayAge(person.age);
    displayPhoneNumber(person.phone);
  }
  displayPerson1(person);
  // min
  // 100
  // 010-1234-5678

  // Bad 2 💩
  function displayPerson2(person) {
    const name = person.name;
    const age = person.age;
    const phoneNumber = person.phone;
    displayName(name);
    displayAge(age);
    displayPhoneNumber(phoneNumber);
  }
  displayPerson2(person);
  // min
  // 100
  // 010-1234-5678

  // Good 👍
  function displayPerson3(person) {
    const { name, age, phone } = person;
    displayName(name);
    displayAge(age);
    displayPhoneNumber(phone);
  }
  displayPerson3(person);
  // min
  // 100
  // 010-1234-5678
}
