/**
 * Object 반복문 => for ~ in 문
 * Object.prototype.keys() => obj 에 키로만 이뤄진 배열 반환
 * process.stdout.write() => 개행문 없는 출력
 */
{
  const graph = { E: ["D", "A"], F: ["D"], A: ["E", "C", "B"], B: ["A"], C: ["A"], D: ["E", "F"] };

  let visited = {};

  function initVisited(visited, graph) {
    for (let key in graph) {
      visited[key] = false;
    }
  }

  function DFS(graph, node) {
    if (visited[node] === false) {
      visited[node] = true;
      process.stdout.write(`${node} `);

      for (let i = 0; i < graph[node].length; i++) {
        if (visited[graph[node][i]] === false) {
          DFS(graph, graph[node][i]);
        }
      }
    }
  }

  /**
   * 반목문, 스택을통한 답안방식 DFS
   * - Array.prototype.includes() => 배열안에 타겟이 있는지 확인
   * - Array.prototype.filter() => 아직 방문안한 현재 노드의 자식노드들 정보만 뽑아내기
   */
  // function dfs(graph, start) {
  // 	let visited = [];
  // 	let stack = [start];

  // 	while(stack.length !== 0) {
  // 		let node = stack.pop();
  // 		if(!visited.includes(node)) {
  // 			visited.push(node);
  // 			let sub = graph[node].filter((x) => !visited.includes(x));
  // 			for(let i of sub) {
  // 				stack.push(i);
  // 			}
  // 		}
  // 	}
  // 	return visited;
  // }

  initVisited(visited, graph2);
  DFS(graph2, Object.keys(graph2)[0]);
}

// const graph2 = {
//   A: ["B", "C"],
//   B: ["A", "D", "E"],
//   C: ["A", "F"],
//   D: ["B"],
//   E: ["B", "G"],
//   F: ["C", "H", "I"],
//   G: ["E"],
//   H: ["F"],
//   I: ["F"],
// };
