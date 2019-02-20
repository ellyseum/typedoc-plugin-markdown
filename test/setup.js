const fs = require('fs');
const Handlebars = require('handlebars');
const path = require('path');

const { ifDisplayHeader } = require('../dist/theme/helpers/if-display-header');
const { heading } = require('../dist/theme/helpers/heading');
const { memberSymbol } = require('../dist/theme/helpers/member-symbol');
const { commentText } = require('../dist/theme/helpers/comment-text');
const { hierachySymbol } = require('../dist/theme/helpers/hierachy-symbol');
const { formatContents } = require('../dist/theme/utils');
const { compact } = require('typedoc/dist/lib/output/helpers/compact');

Handlebars.registerHelper('ifDisplayHeader', ifDisplayHeader);
Handlebars.registerHelper('heading', heading);
Handlebars.registerHelper('memberSymbol', memberSymbol);
Handlebars.registerHelper('hierachySymbol', hierachySymbol);
Handlebars.registerHelper('commentText', commentText);

Handlebars.registerHelper('getNewLine', () => {
  return '\n';
});
Handlebars.registerHelper('compileFixture', () => {
  return '';
});

Handlebars.registerHelper('relativeURL', () => '[relativeURL]');
Handlebars.registerHelper('compact', compact);

fs.readdirSync('./dist/theme/partials').forEach(file => {
  const id = file.replace('.hbs', '');
  Handlebars.registerPartial(id, `[${id}]`);
});

global.compileTemplate = (name, context, type = 'partial') => {
  const hbs = fs.readFileSync(path.resolve(__dirname, `../src/theme/${type}s/${name}`));
  const output = formatContents(Handlebars.compile(hbs.toString())(context));
  return output;
};

global.compileString = (hbs, context) => {
  return Handlebars.compile(hbs)(context);
};
