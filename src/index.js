// src/index.js

import { createLogger, format, transports } from 'winston';
import { LinearRegression } from './supervised/linearRegression';
import { ModelSerialization } from './utils/modelSerialization';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
    ),
    transports: [new transports.Console()],
});

logger.info('ML Library started.');

// Example usage:
const model = new LinearRegression();
const data = [[1, 2], [2, 3], [3, 4]];
const target = [3, 4, 5];

try {
    model.fit(data, target);
    const predictions = model.predict([[4, 5]]);
    logger.info(`Predictions: ${predictions}`);
} catch (error) {
    logger.error(`Error occurred: ${error.message}`);
}

const serializer = new ModelSerialization();
serializer.serialize(model, 'model.json');
