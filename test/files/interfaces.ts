interface LabelledValue {
  label: string;
}

/**
 * The type-checker checks the call to printLabel.
 * @param labelledObj The printLabel function has a single parameter that requires that the
 * object passed in has a property called label of type string.
 */
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

/**
 * The printLabel function has a single parameter that requires that the object passed in has a property called label
 */
let myObj = { size: 10, label: 'Size 10 Object' };

printLabel(myObj);

/**
 * Not all properties of an interface may be required. Some exist under certain conditions or may not be there at all.
 */
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  const newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: 'black' });
