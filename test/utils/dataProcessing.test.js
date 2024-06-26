// test/utils/dataProcessing.test.js
import { dataProcessing } from '../../src/utils/dataProcessing.js';
import { assert } from 'chai';

const data = [[1, 2], [2, 3], [3, 4], [5, 6], [7, 8]];

const normalizedData = dataProcessing.normalize(data);
const standardizedData = dataProcessing.standardize(data);

console.log('Normalized Data:', normalizedData);
console.log('Standardized Data:', standardizedData);

assert.isArray(normalizedData);
assert.lengthOf(normalizedData, data.length);
assert.isArray(standardizedData);
assert.lengthOf(standardizedData, data.length);
