import { initFlatPolyphile } from './my-flat.js';
initFlatPolyphile();

/// test 1
const arr = [1, 2, [3, 4, [9]]];
console.log('test 1:', arr.myFlat());

/// test 2
const arr2 = [1, 2, [3, 4, [5, [6]], [9, 10]]];
console.log('test 2:', arr2.myFlat());
