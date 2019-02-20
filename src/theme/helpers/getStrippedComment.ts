/**
 * Returns comments block with new lines stripped
 * @param comment
 */
export function getStrippedComment(comment: any, settings: any) {
  const lineBreak = settings.mdEngine === 'bitbucket' ? ' ' : '<br><br>';
  let newComment: string = '';
  if (comment) {
    if (comment.text) {
      newComment += comment.text.replace(/\n\n/g, lineBreak);
    }
    if (comment.shortText) {
      newComment += comment.shortText.replace(/\n\n/g, lineBreak);
    }
  }
  return newComment === '' ? '-' : newComment;
}
