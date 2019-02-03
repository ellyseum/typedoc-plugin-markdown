import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from 'path';
import { formatContents } from '../src/theme/utils';

const modulesFixture = fs.readFileSync(
  path.resolve(__dirname, './fixtures/modules.json'),
);

const header = fs.readFileSync(
  path.resolve(__dirname, '../src/theme/partials/header.hbs'),
);

const index = fs.readFileSync(path.resolve(__dirname, '../src/theme/partials/index.hbs'));

const members = fs.readFileSync(
  path.resolve(__dirname, '../src/theme/partials/members.hbs'),
);

Handlebars.registerHelper('ifDisplayMainTitle', (item: any, opts: any) => {
  return opts.fn(this);
});

Handlebars.registerHelper('ifDisplayIndex', (item: any, opts: any) => {
  return opts.fn(this);
});

Handlebars.registerHelper('ifDisplayIndexItem', (item: any, opts: any) => {
  return opts.fn(this);
});

Handlebars.registerHelper('ifGroupContainesVisibleItems', (item: any, opts: any) => {
  return opts.fn(this);
});

Handlebars.registerHelper('getHeadingLevel', (baseLevel: string) => {
  return baseLevel;
});

Handlebars.registerHelper('getUrl', (item: any, opts: any) => {
  return '[getUrl]';
});

Handlebars.registerHelper('relativeURL', (item: any, opts: any) => {
  return '[relativeURL]';
});

Handlebars.registerHelper('compileGroup', (text, url) => {
  return '[group]';
});

Handlebars.registerHelper('getNewLine', () => {
  return '\n';
});

Handlebars.registerPartial('header', '[header]');
Handlebars.registerPartial('members', '[members]');
Handlebars.registerPartial('index', '[index]');
Handlebars.registerPartial('typeParameters', '[typeParameters]');
Handlebars.registerPartial('hierarchy', '[hierarchy]');
Handlebars.registerPartial('member.signatures', '[member.signatures]');
Handlebars.registerPartial('member.indexSignatures', '[member.indexSignatures]');
Handlebars.registerPartial('comment', '[comment]');
Handlebars.registerPartial('type', '[type]');

function compilePartial(template) {
  const partial = fs.readFileSync(path.resolve(__dirname, `../src/theme/${template}`));
  return Handlebars.compile(partial.toString());
}

export function getResult(template, context) {
  return formatContents(compilePartial(template)(context));
}
