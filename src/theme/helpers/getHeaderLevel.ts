import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { getMarkdownEngine } from '../utils';

export function getHeaderLevel(member: DeclarationReflection) {
    const headingLevel = getMarkdownEngine() === 'githubWiki' ? '##' : '#';
    return headingLevel;
}
