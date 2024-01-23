import { test } from 'bun:test';
import assert from 'assert/strict';
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
    assert(html.includes('<div data-hpc>'));
});

test('no option', async () => {
    const { repositories } = await fetchGithubTrending();
    assert.strictEqual(repositories.length, RepositoryCount);
    assert(Object.keys(repositories[0]).length > 0);
});

test('with all options and single language', async () => {
    const { repositories, url } = await fetchGithubTrending({
        spokenLanguage: SpokenLanguage.Chinese,
        programLanguage: ProgramLanguage.TypeScript,
        dateRange: 'monthly',
    });
    assert.strictEqual(
        url,
        'https://github.com/trending/typescript?spoken_language_code=zh&since=monthly',
    );

    assert.strictEqual(
        repositories[0].programLanguage,
        Object.entries(ProgramLanguage).find(
            ([_, lang]) => lang === ProgramLanguage.TypeScript,
        )?.[0],
    );
    assert(repositories.some((repo) => /[\u4e00-\u9fff]+/.test(repo.description)));
});

test('fetch multiple programLanguage', async () => {
    const options = {
        spokenLanguage: SpokenLanguage.Chinese,
        programLanguage: [ProgramLanguage.TypeScript, ProgramLanguage.Rust],
        dateRange: 'monthly',
    } satisfies Options;
    const { repositories, info } = await fetchGithubTrending(options);
    assert(repositories.length > 0);
    assert(repositories.length < RepositoryCount * options.programLanguage.length);
    assert(info?.size === 2);
    assert(Array.from(info.values()).every((value) => value.repositories.length !== 0));
    options.programLanguage.forEach((programLanguage) => {
        assert(
            repositories.some(
                (repo) =>
                    repo.programLanguage ===
                    Object.entries(ProgramLanguage).find(
                        ([_, lang]) => lang === programLanguage,
                    )?.[0],
            ),
        );
    });
});
