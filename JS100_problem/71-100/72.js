/**
 * 배열 뒤에 새로운 배열원소들을 붙이는 법
 * - arr1.concat(arr2)
 * - arr1 = [...arr1, arr2] // spread 연산자
 *
 * deque 처럼 JS 에서 queue 배열의 1번째 원소 빼는 법
 * - Array.prototype.shift() => 배열 맨앞 원소 pop 한다. <-> Array.prototype.unshift()
 * - 단, 실제 deque 처럼 O(1) 이 아닌, pop하고 배열을 앞으로 밀어주는데까지 O(n) 시간 소요될 듯
 * 
 * 
push -> O(1)
pop -> O(1)
shift -> O(N)
slice -> O(N)
splice -> O(N)
 */

{
  const graph = { E: ["D", "A"], F: ["D"], A: ["E", "C", "B"], B: ["A"], C: ["A"], D: ["E", "F"] };

  function BFS(graph, node) {
    let visited = [];
    let queue = [node];

    while (queue.length !== 0) {
      let popNode = queue.shift();
      if (!visited.includes(popNode)) {
        visited.push(popNode);
        let sub = graph[popNode].filter((x) => !visited.includes(x));
        queue = [...queue, ...sub];
      }
    }
    return visited;
  }

  console.log(BFS(graph, Object.keys(graph)[0]));
}
