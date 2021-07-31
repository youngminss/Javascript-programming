{
  function eatingContest(players, Dishs) {
    let playerAndDishs = players.map((player, idx) => {
      return [players[idx], Dishs[idx]];
    });

    playerAndDishs.sort((a, b) => (a[1] < b[1] ? 1 : -1));
    playerAndDishs.forEach((player, idx) => {
      player[1] = idx + 1;
    });
    let result = {};
    for (let player of playerAndDishs) {
      result[player[0]] = player[1];
    }

    return result;
  }

  console.log(eatingContest(["손오공", "야모챠", "메지터", "비콜로"], [70, 10, 55, 40]));
}

//	[손오공, 야모챠, 메지터, 비콜로], [70, 10, 55, 40]
//	["홍길동","엄석대","연개소문","김첨지"], [2, 1, 10, 0]
