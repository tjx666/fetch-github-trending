export type Text = {
    type: 'text';
    data: string;
};

export interface Repository {
    owner: string;
    name: string;
    description: string;
    programLanguage?: string;
    programLanguageColor?: string;
    starCount: number;
    starCountInDateRange: number;
    forkCount: number;
    contributors: string[];
}

export interface FetchResult {
    url: string;
    html: string;
    repositories: Repository[];
    info?: Map<
        string,
        {
            html: string;
            repositories: Repository[];
        }
    >;
}
