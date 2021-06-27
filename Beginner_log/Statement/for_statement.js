var odd = 0,
  even = 0;

for (var i = 1; i < 51; i++) {
  if (i % 2 === 0) even += i;
  else odd += i;
}
console.log("홀수의 합 :", odd);
console.log("짝수의 합:", even);
console.log("모든 수의 합 :", odd + even);
