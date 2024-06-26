// test/supervised/svm.test.js
import { SVM } from '../../src/supervised/svm.js';
import { assert } from 'chai';

const X = [[1, 2], [2, 3], [3, 4], [5, 6], [7, 8]];
const y = [0, 0, 1, 1, 1];

const model = new SVM();
model.fit(X, y);
const predictions = model.predict(X);

console.log('Predictions:', predictions);

assert.deepEqual(predictions, y);
