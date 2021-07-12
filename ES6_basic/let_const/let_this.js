// ===== let 과 this =====
var music = "음악";
let sports = "축구";
console.log(this.music, this.sports);
// 음악 undefined
/**
 * 브라우저에서 확인해보면 위와 같은 결과가 찍힌다.
 * 이는, var 변수는 현재(브라우저 기준) 글로벌 오브젝트이고, 이는 곧 window 오브젝트에 설정된다.
 * let 변수는 window 오브젝트에 설정되지 않는다.
 * this.music, this.sports 에서 this는 window 오브젝트를 참조한다.
 * window 오브젝트에 music은 설정되어 있고, sports 는 let 변수이므로 window 오브젝트에 설정되어 있지 않다.
 * 고로, 음악, undefined 순으로 출력된다.
 */
