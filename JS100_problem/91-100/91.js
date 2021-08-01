{
  function makeRandomStudentScores() {
    let everyClassStudnetsScoreInfo = [];

    for (let i = 0; i < 7; i++) {
      let oneClassStudentsScoreInfo = Array.from(new Array(30), () => new Array(5).fill(0));
      for (let i = 0; i < oneClassStudentsScoreInfo.length; i++) {
        for (let j = 0; j < oneClassStudentsScoreInfo[i].length; j++) {
          oneClassStudentsScoreInfo[i][j] = Math.floor(Math.random() * 100) + 1;
        }
      }
      everyClassStudnetsScoreInfo.push(oneClassStudentsScoreInfo);
    }

    return everyClassStudnetsScoreInfo;
  }

  function getEveryClassAverageScores(classes) {
    let everyClassAverageScores = [];

    classes.forEach((classScores) => {
      let sumCurrentClassAllScore = 0;
      classScores.forEach((eachStudentScore) => {
        eachStudentScore.forEach((subjectScore) => {
          sumCurrentClassAllScore += subjectScore;
        });
      });
      everyClassAverageScores.push(Math.floor(sumCurrentClassAllScore / 150));
    });

    return everyClassAverageScores;
  }

  function getEachClassTopStudentScore(classes) {
    let eachClassTopStudents = [];

    for (let currentClass of classes) {
      let topStudent = null;
      let currentTopSumScore = 0;

      for (let currentStudent of currentClass) {
        let currentStudentSumScore = currentStudent.reduce((totalScore, currentScore) => (totalScore += currentScore), 0);
        if (currentTopSumScore <= currentStudentSumScore) {
          topStudent = currentStudent;
        }
      }

      eachClassTopStudents.push(topStudent);
    }

    return eachClassTopStudents;
  }

  function getSchoolAverageScore(classes) {
    let sumSchoolAllStudentScore = 0;

    classes.forEach((classScores) => {
      classScores.forEach((eachStudentScore) => {
        eachStudentScore.forEach((subjectScore) => {
          sumSchoolAllStudentScore += subjectScore;
        });
      });
    });

    return Math.floor(sumSchoolAllStudentScore / 150 / 7);
  }

  // 1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요.
  const everyClassStudentsScoreInfo = makeRandomStudentScores();
  // console.log(everyClassStudentsScoreInfo);

  // 2. 반 평균을 구하세요.
  const everyClassAverageScoreInfo = getEveryClassAverageScores(everyClassStudentsScoreInfo);
  // console.log(everyClassAverageScoreInfo);

  // 3. 반 1등 점수를 구하세요.
  const eachClassTopStudentScores = getEachClassTopStudentScore(everyClassStudentsScoreInfo);
  // console.log(eachClassTopStudentScores);

  // 4. 전교 평균을 구하세요.
  const schoolAverage = getSchoolAverageScore(everyClassStudentsScoreInfo);
  // console.log(schoolAverage);
}
