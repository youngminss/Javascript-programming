var point = 123;
console.log(typeof point);
point = -1.23;
console.log(typeof point);

// number
// number

var point = 1 * "A";
console.log(point);
console.log(typeof NaN);

// NaN (Not a Number)
// number

var point = "책, '123'";
console.log(point);
point = '책 "123"';
console.log(point);
point = `책 ${123}`;
console.log(point);

// 책, '123'
// 책 "123"
// 책 123
