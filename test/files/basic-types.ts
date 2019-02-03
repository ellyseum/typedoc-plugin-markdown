/**
 * The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
 */
let isDone = false;

/**
 * As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number.
 */
let decimal = 6;

/**
 * As in other languages, we use the type string to refer to these textual datatypes.
 */
let color = 'blue';

/**
 * Tuple types allow you to express an array where the type of a fixed number of elements is known,
 * but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
 */
let x: [string, number];

/***
 * We may need to describe the type of variables that we do not know when we are writing an application.
 */
let notSure: any;

/**
 * void is a little like the opposite of any: the absence of having any type at all.
 * You may commonly see this as the return type of functions that do not return
 */

function warnUser() {
  console.log('This is my warning message');
}
