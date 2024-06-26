// test/supervised/linearRegression.test.js
import { LinearRegression } from '../../src/supervised/linearRegression.js';
import { assert } from 'chai';

const X = [[1, 2], [2, 3], [3, 4], [5, 6], [7, 8]];
const y = [3, 5, 7, 11, 15];

const model = new LinearRegression();
model.fit(X, y);
const predictions = model.predict(X);

console.log('Predictions:', predictions);

assert.closeTo(predictions[0], 3, 0.1);
assert.closeTo(predictions[1], 5, 0.1);
assert.closeTo(predictions[2], 7, 0.1);
assert.closeTo(predictions[3], 11, 0.1);
assert.closeTo(predictions[4], 15, 0.1);
