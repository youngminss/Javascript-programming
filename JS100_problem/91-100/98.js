/**
 * 문자열 형태로 입력이 주어지는 상황에서
 * "공백" 기준으로 on/off 로 체크하는 영역 제어
 *
 * [참고]
 * - String.prototype.split(regex, option) 가능
 */
{
  function fashionContest(participantInfo) {
    let uniqueFassionSequence = [];

    let flag = false;
    for (let i = 0; i < participantInfo.length; i++) {
      if (participantInfo[i] == " ") {
        flag = !flag;
      } else {
        if (flag === true && participantInfo[i] !== ",") {
          if (!uniqueFassionSequence.includes(parseInt(participantInfo[i]))) {
            uniqueFassionSequence.push(parseInt(participantInfo[i]));
          }
        }
      }
    }
    console.log(uniqueFassionSequence);
  }

  const participantInfo = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4";
  fashionContest(participantInfo);
}

//	"1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3"  => [4, 2, 3, 1]
//	"1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4" => [3, 1, 4, 2]
