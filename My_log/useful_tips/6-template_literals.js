{
  /**
   * Template-literals
   */
  const person = {
    name: "min",
    age: 100,
  };

  // 인사하는 코드상황
  // Bad 💩
  console.log("Hello My Name is", person.name, "I`m", person.age, "years old. haha~");

  // Good 👍
  console.log(`Hello My Name is ${person.name}, I'm ${person.age} years old. haha~`);

  // Best 👍 (자주 쓸 것 같은 것 함수로 모듈화 해놓기)
  function greeting(person) {
    const { name, age } = person;
    console.log(`Hello My Name is ${name}, I'm ${age} years old. haha~`);
  }
  greeting(person);
}
