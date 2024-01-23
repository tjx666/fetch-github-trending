import { $ } from 'bun';

// transpile
const outFile = `'./dist/fetchGithubTrending.js'`;
await $`bun build ./benchmark/fetchGithubTrending.ts --no-bundle --outfile=${outFile}`;

// nodejs
let start = performance.now();
await $`node ${outFile}`;
const current = performance.now();
const nodeCosts = current - start;
console.log(`node costs ${nodeCosts}ms`);

// bun
start = current;
await $`bun ${outFile}`;
const bunCosts = performance.now() - start;
console.log(`bun costs ${bunCosts}ms`);

const [fasterCosts, slowerCosts] =
    nodeCosts > bunCosts ? [bunCosts, nodeCosts] : [nodeCosts, bunCosts];
const [faster, slower] = fasterCosts === nodeCosts ? ['node', 'bun'] : ['bun', 'node'];
const rate = `${(((slowerCosts - fasterCosts) / fasterCosts) * 100).toFixed(3)}%`;

// biome-ignore format: readability
console.log(`${faster}(${fasterCosts.toFixed(3)}) is faster than ${slower}(${slowerCosts.toFixed(3)}) with ${rate}`);
