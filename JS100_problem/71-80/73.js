/**
 * 최단거리(Shortest Path)
 * - 방문정보 배열
 * - 거리가 갱신될 때마다, 갱신된 나의 상대방 노드 넣는 큐 (BFS 순회함, 스택의 경우 => DFS 방식)
 * - start 노드부터 연결된 모든 노드들간의 최소거리정보 담길 배열
 *
 * 동작방식
 * - 일단, 시작노드만 거리 0, 나머지 시작노드와 연결된 모든 노드들의 거리는 INF 로 설정
 * - 매 차례, 나의 주변 노드들 중에, 아직 방문안한 노드들을 추출 해놓음
 * - 시작노드부터 시작해서, BFS 탐색순서로, 현재 나의 주변 노드에 대해, 현재 나의 거리정보 + 1 가, 상대 노드의 거리정보보다 작다면, 상대방 노드 거리정보 업데이트
 * - 그리고, 큐에 push
 * - 마지막에 현재 방문했던 노드들 업데이트
 * - 이 과정을 큐가 비워질 때까지 (즉, SP 과정이 종료되었을 경우)
 */
{
  const graph = { A: ["B", "C"], B: ["A", "D", "E"], C: ["A", "F"], D: ["B"], E: ["B", "F"], F: ["C", "E"] };

  function SP(graph, start, destination) {
    let visited = [start];
    let queue = [start];
    let distance = new Array(Object.keys(graph).length).fill(999999);
    distance[start.charCodeAt() - "A".charCodeAt()] = 0;

    while (queue.length !== 0) {
      let popNode = queue.shift();
      let linkedNodes = graph[popNode].filter((node) => !visited.includes(node));

      for (let i = 0; i < linkedNodes.length; i++) {
        if (distance[popNode.charCodeAt() - "A".charCodeAt()] + 1 < distance[linkedNodes[i].charCodeAt() - "A".charCodeAt()]) {
          distance[linkedNodes[i].charCodeAt() - "A".charCodeAt()] = distance[popNode.charCodeAt() - "A".charCodeAt()] + 1;
          queue.push(linkedNodes[i]);
        }
      }

      visited = [...visited, ...linkedNodes];
    }

    // console.log(visited);
    // console.log(distance);
    return distance[destination.charCodeAt() - "A".charCodeAt()];
  }

  console.log(SP(graph, "A", "F"));
}
