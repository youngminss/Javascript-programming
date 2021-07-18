// ===== for of =====
const list = [1, 2, 3];
for (let value of list) {
  console.log(value);
}
// 1
// 2
// 3

// ===== for of Array =====
{
  for (let value of [1, 2, 3]) {
    console.log(value);
  }
}
// 1
// 2
// 3

// ===== for of String =====
{
  for (let value of "String") {
    console.log(value);
  }
}
// S
// t
// r
// i
// n
// g

// ===== for of NodeList =====
{
  const nodes = document.querySelectorAll("클래스");
  for (let node of nodes) {
    console.log(node);
  }
}
