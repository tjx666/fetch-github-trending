import { $ } from 'bun';

// transpile
const outFile = `'./dist/fetchGithubTrending.js'`;
await $`bun build ./benchmark/fetchGithubTrending.ts --no-bundle --outfile=${outFile}`;

// nodejs
let start = performance.now();
await $`node ${outFile}`;
const current = performance.now();
const nodeCosts = current - start;
console.log(`nodejs costs ${nodeCosts}ms`);

// bun
start = current;
await $`bun ${outFile}`;
const bunCosts = performance.now() - start;
console.log(`bun costs ${bunCosts}ms`);

const result =
    nodeCosts > bunCosts
        ? {
              faster: 'bun',
              slower: 'nodejs',
              fastCosts: bunCosts,
              slowerCosts: nodeCosts,
              rate: (nodeCosts - bunCosts) / bunCosts,
          }
        : {
              faster: 'nodejs',
              slower: 'bun',
              fasterCosts: nodeCosts,
              slowerCosts: bunCosts,
              rate: (bunCosts - nodeCosts) / nodeCosts,
          };

console.log(
    `${result.faster}(${result.fastCosts}) is faster than ${result.slower}(${
        result.slowerCosts
    }) with ${(result.rate * 100).toFixed(3)}%`,
);
