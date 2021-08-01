{
  function FIFO(pages, frame) {
    let hit = 0;
    let miss = 0;
    let memory = Array.from(new Array(frame));
    let lastMemoryIdx = 0;

    for (let page of pages) {
      if (memory.includes(page)) {
        hit++;
      } else {
        miss++;
        if (memory.some((space) => space === undefined)) {
          memory.splice(memory.indexOf(undefined), 1, page);
        } else {
          memory.splice(lastMemoryIdx, 1, page);
          lastMemoryIdx = (lastMemoryIdx + 1) % frame;
        }
      }
    }

    return hit * 1 + miss * 6;
  }

  console.log(FIFO("ABCDABEA", 3));
}

// 'BCBAEBCE', 3	=> 38
// 'ABCABCABC', 3	=> 24
// 'ABCDABEABCDE', 4	=> 62
// 'ABCEDF', 0	=> 36
// 'ABCDABEA', 3	=> 43
