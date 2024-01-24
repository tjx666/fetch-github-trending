# fetch-github-trending

[![npm](https://img.shields.io/npm/v/fetch-github-trending.svg)](https://npmjs.com/package/fetch-github-trending) [![downloads](https://img.shields.io/npm/dw/fetch-github-trending)](https://npmjs.com/package/fetch-github-trending) [![Test](https://github.com/tjx666/fetch-github-trending/actions/workflows/test.yml/badge.svg)](https://github.com/tjx666/fetch-github-trending/actions/workflows/test.yml)

fetch github trending easily

## Install

```bash
npm install fetch-github-trending
```

## Usage

```typescript
import fetchGithubTrending, { ProgramLanguage, SpokenLanguage } from 'fetch-github-trending';

const { repositories } = await fetchGithubTrending({
  spokenLanguage: SpokenLanguage.English,
  programLanguage: ProgramLanguage.TypeScript,
  dateRange: 'monthly',
});

console.log(repositories);
```

output:

```javascript
[
  {
    owner: 'freeCodeCamp',
    name: 'freeCodeCamp',
    description: "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
    programLanguage: 'TypeScript',
    programLanguageColor: '#3178c6',
    starCount: 382086,
    starCountInDateRange: 151,
    forkCount: 35617,
    contributors: ['raisedadead', 'ojeytonwilliams', 'camperbot', 'renovate-bot', 'sahat'],
  },
  // ...
];
```

## Options

view [source](https://github.com/tjx666/fetch-github-trending/blob/main/src/types/Options.ts) for latest options:

```typescript
interface Options {
  spokenLanguage?: SpokenLanguage;
  programLanguage?: ProgramLanguage | ProgramLanguage[];
  dateRange?: 'daily' | 'weekly' | 'monthly';
}
```
