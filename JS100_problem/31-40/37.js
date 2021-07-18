/**
 * Object.entries(obj)
 * -> obj 를 Array 로 변환한다.
 * -> for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환
 */
{
  function pickClassLeader(votes) {
    let members = {};
    votes.forEach((vote) => {
      vote in members ? (members[vote] += 1) : (members[vote] = 1);
    });
    members = Object.entries(members);
    members.sort((a, b) => (a[1] < b[1] ? 1 : -1));
    console.log(`${members[0][0]}(이)가 총 ${members[0][1]}표로 반장이 되었습니다.`);
  }
  pickClassLeader(["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"]);
}
