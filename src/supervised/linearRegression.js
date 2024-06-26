// src/supervised/linearRegression.js
import { Matrix } from 'ml-matrix';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
    ),
    transports: [new transports.Console()],
});

class LinearRegression {
    constructor() {
        this.coefficients = null;
        logger.info('LinearRegression model created.');
    }

    fit(X, y) {
        if (!Array.isArray(X) || !Array.isArray(y)) {
            logger.error('Invalid input: X and y should be arrays.');
            throw new TypeError('Input should be an array');
        }
        if (X.length !== y.length) {
            logger.error('Mismatched input lengths: X and y should have the same length.');
            throw new Error('X and y should have the same length');
        }

        const XMatrix = new Matrix(X);
        const yMatrix = Matrix.columnVector(y);
        const XTX = XMatrix.transpose().mmul(XMatrix);
        const XTy = XMatrix.transpose().mmul(yMatrix);
        this.coefficients = XTX.inverse().mmul(XTy);
        logger.info('Model fitted successfully.');
    }

    predict(X) {
        if (!Array.isArray(X)) {
            logger.error('Invalid input: X should be an array.');
            throw new TypeError('Input should be an array');
        }

        const XMatrix = new Matrix(X);
        const predictions = XMatrix.mmul(this.coefficients).to1DArray();
        logger.info('Predictions made successfully.');
        return predictions;
    }
}

export { LinearRegression };
