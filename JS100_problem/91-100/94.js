{
  function isPageInMemory(memory, page) {
    for (let m of memory) {
      if (m !== null) {
        if (m[0] === page) {
          return true;
        }
      }
    }
    return false;
  }
  function leastUsedInMemory(memory) {
    let inMemoryTimes = memory.map((m) => m[1]);
    let maxWaitTime = Math.max.apply(null, inMemoryTimes);

    for (let i = 0; i < memory.length; i++) {
      if (memory[i][1] === maxWaitTime) {
        return i;
      }
    }
  }
  function oneTickInMemory(memory) {
    for (let m of memory) {
      if (m != null) {
        m[1]++;
      }
    }
  }
  function getHitIdxInMemory(memory, page) {
    for (let i = 0; i < memory.length; i++) {
      if (memory[i] != null) {
        if (memory[i][0] === page) {
          return i;
        }
      }
    }
  }

  function LRU(pages, frame) {
    let memory = Array.from(new Array(frame).fill(null));
    let hit = 0;
    let miss = 0;

    for (let page of pages) {
      if (isPageInMemory(memory, page)) {
        hit++;
        const hitIdxInMemory = getHitIdxInMemory(memory, page);
        memory[hitIdxInMemory][1] = 0;
      } else {
        miss++;
        if (memory.some((space) => space == null)) {
          memory.splice(memory.indexOf(null), 1, [page, 0]);
        } else {
          const leastUsedInMemoryIdx = leastUsedInMemory(memory);
          memory.splice(leastUsedInMemoryIdx, 1, [page, 0]);
        }
      }
      oneTickInMemory(memory);
    }

    return hit * 1 + miss * 6;
  }

  console.log(LRU("ABCEDF", 0));
}

// 'BCBAEBCE', 3 => 33
// 'ABCABCABC', 3 => 24
// 'ABCEDF', 0 => 36
