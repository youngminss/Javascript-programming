{
  /**
   * Optional Chaining
   *
   * [참고] https://ko.javascript.info/optional-chaining
   */
  const min = {
    name: "min",
    age: 100,
  };
  const young = {
    name: "young",
    age: 200,
    job: {
      title: "Front-End Engineer",
    },
  };

  // 직업이 있고, 직업의 이름이 있다면 출력하는 상황
  // Bad 💩
  function displayJobTitle1(person) {
    if (person.job && person.job.title) {
      console.log(person.job.title);
    }
  }

  // Good 👍
  // job 이 있으면 title이 있는지보고, 애초에 job 이없으면 false
  function displayJobTitle2(person) {
    if (person.job?.title) {
      console.log(person.job.title);
    } else {
      console.log("No Job Yet ㅠㅠ");
    }
  }
  displayJobTitle2(min); // No Job Yet ㅠㅠ
  displayJobTitle2(young); // Front-End Engineer

  // Optional Chaining & Nullish Coalescing
  function displayJobTitle3(person) {
    const title = person.job?.title ?? "No Job Yet ㅠㅠ";
    console.log(title);
  }
  displayJobTitle3(min); // No Job Yet ㅠㅠ
  displayJobTitle3(young); // Front-End Engineer
}
