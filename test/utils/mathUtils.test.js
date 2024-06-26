// test/utils/mathUtils.test.js
import { math } from '../../src/utils/mathUtils.js';
import { assert } from 'chai';

const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];
const vector = [1, 2];

const transposeA = math.transpose(A);
const productAB = math.multiply(A, B);
const invA = math.inv(A);
const dotProduct = math.dot(vector, vector);
const subtracted = math.subtract(vector, vector);
const added = math.add(vector, vector);

console.log('Transpose:', transposeA);
console.log('Product:', productAB);
console.log('Inverse:', invA);
console.log('Dot Product:', dotProduct);
console.log('Subtracted:', subtracted);
console.log('Added:', added);

assert.deepEqual(transposeA, [[1, 3], [2, 4]]);
assert.deepEqual(productAB, [[19, 22], [43, 50]]);
assert.deepEqual(invA, [[-2, 1], [1.5, -0.5]]);
assert.equal(dotProduct, 5);
assert.deepEqual(subtracted, [0, 0]);
assert.deepEqual(added, [2, 4]);
