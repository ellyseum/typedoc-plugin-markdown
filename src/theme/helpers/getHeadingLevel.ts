import { getMarkdownEngine } from '../utils';

export function getHeadingLevel(baseLevel: string) {
    console.log(getMarkdownEngine(), baseLevel);
    return getMarkdownEngine() === 'gitbook'
        ? baseLevel.substring(0, baseLevel.length - 1)
        : getMarkdownEngine() === 'githubWiki'
        ? baseLevel + '#'
        : baseLevel;
}
