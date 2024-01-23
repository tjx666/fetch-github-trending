import type { ProgramLanguage } from './ProgramLanguage';
import type { SpokenLanguage } from './SpokenLanguage';

export interface Options {
    spokenLanguage?: SpokenLanguage;
    programLanguage?: ProgramLanguage | ProgramLanguage[];
    dateRange?: 'daily' | 'weekly' | 'monthly';
}
