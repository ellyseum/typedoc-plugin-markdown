import { getMarkdownEngine } from '../utils';

export function getUrl(url: string) {
    if (getMarkdownEngine() === 'githubWiki') {
        return url.replace(/.md/g, '');
    }
    return url;
}
