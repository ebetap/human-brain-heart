// test/supervised/decisionTree.test.js
import { DecisionTree } from '../../src/supervised/decisionTree.js';
import { assert } from 'chai';

const X = [[1, 2], [2, 3], [3, 4], [5, 6], [7, 8]];
const y = [0, 0, 1, 1, 1];

const model = new DecisionTree();
model.fit(X, y);
const predictions = model.predict(X);

console.log('Predictions:', predictions);

assert.deepEqual(predictions, y);
