// src/supervised/linearRegression.js
import { Matrix } from 'ml-matrix';

class LinearRegression {
    constructor() {
        this.coefficients = null;
    }

    fit(X, y) {
        const XMatrix = new Matrix(X);
        const yMatrix = Matrix.columnVector(y);
        const XTX = XMatrix.transpose().mmul(XMatrix);
        const XTy = XMatrix.transpose().mmul(yMatrix);
        this.coefficients = XTX.inverse().mmul(XTy);
    }

    predict(X) {
        const XMatrix = new Matrix(X);
        return XMatrix.mmul(this.coefficients).to1DArray();
    }
}

export { LinearRegression };
