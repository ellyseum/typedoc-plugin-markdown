import { getMarkdownEngine } from '../utils';

export function getMemberGroupHeadingLevel() {
    return getMarkdownEngine() === 'gitbook'
        ? '#'
        : getMarkdownEngine() === 'githubWiki'
        ? '###'
        : '##';
}
