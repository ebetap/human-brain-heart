// src/utils/mathUtils.js
import { Matrix } from 'ml-matrix';

const math = {
    transpose: function (matrix) {
        return new Matrix(matrix).transpose();
    },
    multiply: function (a, b) {
        return new Matrix(a).mmul(new Matrix(b));
    },
    inv: function (matrix) {
        return new Matrix(matrix).inverse();
    },
    dot: function (a, b) {
        return new Matrix(a).mmul(new Matrix(b)).to1DArray();
    },
    subtract: function (a, b) {
        return new Matrix(a).subtract(new Matrix(b)).to1DArray();
    },
    add: function (a, b) {
        return new Matrix(a).add(new Matrix(b)).to1DArray();
    },
};

export { math };
