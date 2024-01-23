import { load } from 'cheerio';
import type { FetchResult, Repository, Text } from './types/Model';
import type { Options } from './types/Options';
import { ProgramLanguage } from './types/ProgramLanguage';

export { SpokenLanguage } from './types/SpokenLanguage';
export { ProgramLanguage } from './types/ProgramLanguage';

type InnerOptions = Omit<Options, 'programLanguage'> & { programLanguage: ProgramLanguage };

export const GithubTrendingBaseUrl = 'https://github.com/trending';

async function _fetchGithubTrending(options?: InnerOptions) {
    // https://github.com/trending/apollo-guidance-computer?since=weekly&spoken_language_code=ab
    let url = GithubTrendingBaseUrl;
    const params = new URLSearchParams();
    if (options?.spokenLanguage) {
        params.set('spoken_language_code', options.spokenLanguage);
    }

    if (options?.programLanguage) {
        url += `/${options.programLanguage}`;
    }

    if (options?.dateRange) {
        params.set('since', options.dateRange);
    }
    url += `?${params.toString()}`;
    const resp = await fetch(url);
    const html = await resp.text();
    const $ = load(html);

    const $articles = $('main .Box div[data-hpc] > article');
    const repositories: Repository[] = $articles.toArray().map((article) => {
        const $article = $(article);

        const $topLink = $article.find('h2 > a');
        const [owner, name] = $topLink
            .text()
            .split('/')
            .map((e) => e.trim());

        const $bottom = $article.children().last();

        const starSvgList = $bottom.find('svg.octicon-star');
        const starCount = parseInt((starSvgList.get(0)!.nextSibling as Text).data.replace(',', ''));
        const starCountInDateRange = parseInt(
            (starSvgList.get(1)!.nextSibling as Text).data.replace(',', ''),
        );

        const forkSvg = $bottom.find('svg.octicon-repo-forked').get(0)!;
        const forkCount = parseInt((forkSvg.nextSibling as Text).data.replace(',', ''));

        const $contributorImgs = $bottom.find('> span > a > img');
        const contributors = $contributorImgs.toArray().map((img) => img.attribs.alt.slice(1));

        return {
            owner,
            name,
            description: $article.find('> p').text().trim(),
            programLanguage: $bottom.find('span[itemprop=programmingLanguage]').text(),
            starCount,
            starCountInDateRange,
            forkCount,
            contributors,
        };
    });

    return {
        url,
        html,
        repositories,
    };
}

export default async function fetchGithubTrending(options?: Options): Promise<FetchResult> {
    if (Array.isArray(options?.programLanguage) && options.programLanguage.length >= 2) {
        const fetchPromises = options.programLanguage.map(async (programLanguage) =>
            _fetchGithubTrending({
                ...options,
                programLanguage,
            }),
        );
        const results = (await Promise.all(fetchPromises)).flat();
        const result = {
            url: results[0].url,
            html: results[0].html,
            repositories: results.reduce((repos, result) => {
                repos.push(...result.repositories);
                return repos;
            }, [] as Repository[]),
            info: new Map(
                results.map((repo) => [
                    repo.url,
                    {
                        html: repo.html,
                        repositories: repo.repositories,
                    },
                ]),
            ),
        };
        return result;
    }

    return _fetchGithubTrending(options as InnerOptions);
}

export { fetchGithubTrending };
