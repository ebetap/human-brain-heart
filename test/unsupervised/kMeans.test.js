// test/unsupervised/kMeans.test.js
import { KMeans } from '../../src/unsupervised/kMeans.js';
import { assert } from 'chai';

const X = [[1, 2], [2, 3], [3, 4], [5, 6], [7, 8]];

const model = new KMeans(2);
model.fit(X);
const predictions = model.predict(X);

console.log('Cluster Assignments:', predictions);

// We won't assert exact cluster assignments because they can vary due to the random initialization.
assert.isArray(predictions);
assert.lengthOf(predictions, X.length);
