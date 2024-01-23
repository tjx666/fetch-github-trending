import { expect, test } from 'bun:test';
import fetchGithubTrending, {
    GithubTrendingBaseUrl,
    ProgramLanguage,
    SpokenLanguage,
} from '../src';
import type { Options } from '../src/types/Options';

const RepositoryCount = 25;

test('page html accessible', async () => {
    const resp = await fetch(GithubTrendingBaseUrl);
    const html = await resp.text();
    expect(html.includes('<html lang="en" '));
});

test('no option', async () => {
    const { repositories } = await fetchGithubTrending();
    expect(repositories.length).toBe(RepositoryCount);
    expect(Object.keys(repositories[0]).length > 0);
});

test('with all options and single language', async () => {
    const { repositories, url } = await fetchGithubTrending({
        spokenLanguage: SpokenLanguage.Chinese,
        programLanguage: ProgramLanguage.TypeScript,
        dateRange: 'monthly',
    });
    expect(url).toBe(
        'https://github.com/trending/typescript?spoken_language_code=zh&since=monthly',
    );
    expect(
        repositories[0].programLanguage ===
            Object.entries(ProgramLanguage).find(
                ([_, lang]) => lang === ProgramLanguage.TypeScript,
            )?.[0],
    );
    expect(repositories.some((repo) => /[\u4e00-\u9fff]+/.test(repo.description)));
});

test('fetch multiple programLanguage', async () => {
    const options = {
        spokenLanguage: SpokenLanguage.Chinese,
        programLanguage: [ProgramLanguage.TypeScript, ProgramLanguage.Rust],
        dateRange: 'monthly',
    } satisfies Options;
    const { repositories } = await fetchGithubTrending(options);
    expect(repositories.length > 0);
    expect(repositories.length < RepositoryCount * options.programLanguage.length);
    options.programLanguage.forEach((programLanguage) => {
        expect(
            programLanguage ===
                Object.entries(ProgramLanguage).find(
                    ([_, lang]) => lang === ProgramLanguage.TypeScript,
                )?.[0],
        );
    });
});
