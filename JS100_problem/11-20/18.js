{
  class StudentScoreAvgCalc {
    constructor(kor, eng, math) {
      this.kor = kor;
      this.eng = eng;
      this.math = math;
    }
    calcAvg() {
      const avg = Math.floor((this.kor + this.eng + this.math) / 3);
      console.log(`세 과목 평균 : ${avg}`);
    }
  }

  new StudentScoreAvgCalc(20, 30, 50).calcAvg();
}
