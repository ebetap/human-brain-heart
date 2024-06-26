// test/unsupervised/hierarchicalClustering.test.js
import { HierarchicalClustering } from '../../src/unsupervised/hierarchicalClustering.js';
import { assert } from 'chai';

const X = [[1, 2], [2, 3], [3, 4], [5, 6], [7, 8]];

const model = new HierarchicalClustering();
model.fit(X);
const clusters = model.predict(X);

console.log('Dendrogram:', clusters);

assert.isObject(clusters);
assert.property(clusters, 'index');
assert.property(clusters, 'children');
