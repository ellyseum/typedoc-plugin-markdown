import { getResult } from '../../../test/utils';

const context = {
  hasComment: true,
  typeHierarchy: {},
  typeParameters: {},
  implementedTypes: [0, 0],
  implementedBy: [0, 0],
  signatures: {},
  indexSignature: {},
};

const baseFixture = `[header]

[index]

[members]
`;

const fixtureWithContext = `[header]

[comment]

## Type parameters

[typeParameters]

## Hierarchy

[hierarchy]

## Implements

* [type]
* [type]

## Implemented by

* [type]
* [type]

## Callable

[member.signatures]

## Indexable

[member.indexSignatures]

[index]

[members]
`;

describe(`Reflection.hbs`, () => {
  test('should compile base reflection', () => {
    const result = getResult('templates/reflection.hbs', { model: {} });
    expect(result).toEqual(baseFixture);
  });
  test('should compile reflection with context', () => {
    const result = getResult('templates/reflection.hbs', { model: context });
    expect(result).toEqual(fixtureWithContext);
  });
});
