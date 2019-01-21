import { getMarkdownEngine } from '../utils';

/**
 * Return true if breadcrumbs should be displayed
 * @param opts
 */
export function ifDisplayBreadcrumbs(opts: any) {
    return getMarkdownEngine() === 'gitbook' || getMarkdownEngine() === 'githubWiki'
        ? opts.inverse(this)
        : opts.fn(this);
}
