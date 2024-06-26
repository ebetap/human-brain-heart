// src/supervised/logisticRegression.js
import { Matrix } from 'ml-matrix';

class LogisticRegression {
    constructor() {
        this.coefficients = null;
    }

    sigmoid(z) {
        return 1 / (1 + Math.exp(-z));
    }

    fit(X, y, iterations = 1000, learningRate = 0.01) {
        const XMatrix = new Matrix(X);
        this.coefficients = Matrix.zeros(XMatrix.columns, 1);

        for (let i = 0; i < iterations; i++) {
            const predictions = XMatrix.mmul(this.coefficients).apply(this.sigmoid);
            const errors = Matrix.columnVector(y).subtract(predictions);
            const gradient = XMatrix.transpose().mmul(errors).mul(learningRate / XMatrix.rows);
            this.coefficients.add(gradient);
        }
    }

    predict(X) {
        const XMatrix = new Matrix(X);
        const probabilities = XMatrix.mmul(this.coefficients).apply(this.sigmoid);
        return probabilities.to1DArray().map(p => (p >= 0.5 ? 1 : 0));
    }
}

export { LogisticRegression };
