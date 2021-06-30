// ===== 시작, 끝, 파라미터 모두 작성 =====
var origin = [1, 2, 3, 4, 5];
var result = origin.slice(1, 3);
console.log(result);
console.log(origin);
// [ 2, 3 ]
// [ 1, 2, 3, 4, 5 ]

// ===== 시작 파라미터만 작성 =====
var origin = [10, 20, 30, 40, 50];
var result = origin.slice(2);
console.log(result);
console.log(origin);
// [ 30, 40, 50 ]
// [ 10, 20, 30, 40, 50 ]
