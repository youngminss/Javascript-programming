{
  const graph = { 1: [2, 3, 4], 2: [1, 3, 4, 5, 6], 3: [1, 2, 7], 4: [1, 2, 5, 6], 5: [2, 4, 6, 7], 6: [2, 4, 5, 7], 7: [3, 5, 6] };
  let visited = new Array(Object.keys(graph).length + 1).fill(false);
  let distance = 0;

  function LP(graph, start, destination, visited, d) {
    visited[start] = true;
    distance = start === destination && distance < d ? d : distance;

    // let linkedNodes = graph[start].filter((node) => !visited[node]);

    for (let node of graph[start]) {
      if (!visited[node]) {
        LP(graph, node, destination, visited, d + 1);
        visited[node] = false;
      }
    }
    // for (node of linkedNodes) {
    //   if (!visited[node]) {
    //     LP(graph, node, destination, d + 1);
    //     visited[node] = false;
    //   }
    // }
  }

  LP(graph, 1, 7, visited, 0);
  console.log(distance);
}
