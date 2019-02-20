module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(spec))\\.js?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFiles: ['./test/setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['dist/**/*js'],
};
