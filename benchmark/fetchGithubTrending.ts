import { ProgramLanguage, SpokenLanguage, fetchGithubTrending } from '../dist/index.js';

await fetchGithubTrending({
    programLanguage: [
        ProgramLanguage.TypeScript,
        ProgramLanguage.JavaScript,
        ProgramLanguage.Rust,
        ProgramLanguage.Go,
        ProgramLanguage.Java,
        ProgramLanguage['C++'],
        ProgramLanguage.C,
        ProgramLanguage.Python,
        ProgramLanguage.PHP,
        ProgramLanguage['Jupyter Notebook'],
    ],
    spokenLanguage: SpokenLanguage.English,
    dateRange: 'monthly',
});
