var value = "   abcd   ";
console.log(value.length);
// 10

value.trim();
console.log(value);
console.log(value.length);
//    abcd   ;
// 10;
/**
 * string.trim() 은 비파괴적 함수이기 떄문에 호출만한다고 그 효과가 유지되지 않는다.
 */
value = value.trim();
console.log(value);
console.log(value.length);
// abcd
// 4
/**
 * 따라서, 호출한 결과를 다시 원래 변수에 넣어줘야 호출한 결과를 유지시킬 수 있다.
 */
