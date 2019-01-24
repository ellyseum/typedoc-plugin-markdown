import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { getOptions } from '../props';
import { compilePartial, getMarkdownEngine } from '../utils';

/**
 * Sets relevant context for member.groups and compiles partial
 * @param group
 * @param parent
 */
export function compileGroup(
    group: ReflectionGroup,
    parentKind: ReflectionKind,
) {
    const options = getOptions();

    let md = '';

    if (!options.excludePrivate || !group.allChildrenArePrivate) {
        if (
            (getMarkdownEngine() === 'githubWiki' &&
                group.kind === ReflectionKind.Module) ||
            group.kind === ReflectionKind.Class
        ) {
            md = '# ' + group.title + '\n\n';
            group.children.forEach((child) => {
                md =
                    md +
                    compilePartial('reflection.hbs', {
                        model: { ...child, isIndex: true },
                    });
            });
        } else {
            md = compilePartial('members.group.hbs', { ...group });
        }
    }

    return md;
}
