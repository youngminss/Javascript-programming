{
  /**
   * Promise -> Async/await
   * - 깊게 파보면 알아야 할 것이 좀 있는 Async/await 이나
   * - 핵심만 보자면, 2가지 이상의 연속된 Promise 를 사용해야하는 경우라면 🔍
   * - then 의 연속인 "콜백지옥" 대신, Async/await 를 생각해볼 것
   */

  // Bad 💩
  function displayUser() {
    fetchUser().then((user) => {
      fetchProfile(user).then((profile) => {
        updateUI(user, profile);
      });
    });
  }

  // Good 👍
  async function displayUser2() {
    const user = await fetchUser();
    const profile = await fetchProfile();
    updateUI(user, profile);
  }
}
