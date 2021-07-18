// JS 에서 console.log() => 개행이 끝에 존재
// 공백 X => process.stdout.write();
{
  let input = 5;
  for (let i = 0; i < input; i++) {
    for (let j = input - i; j > 1; j--) {
      process.stdout.write(" ");
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
