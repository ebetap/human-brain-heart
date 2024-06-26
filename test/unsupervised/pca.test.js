// test/unsupervised/pca.test.js
import { PCA } from '../../src/unsupervised/pca.js';
import { assert } from 'chai';

const X = [[1, 2], [2, 3], [3, 4], [5, 6], [7, 8]];

const model = new PCA();
model.fit(X);
const transformed = model.transform(X);

console.log('Transformed Data:', transformed);

assert.isArray(transformed);
assert.lengthOf(transformed, X.length);
