var point = 123;
console.log("console log로 출력 :", point);

log("log로 출력 : ", point);
// ReferenceError: log is not defined

var log = console.log;
log("log로 출력 : ", point);
