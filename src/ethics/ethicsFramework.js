// src/ethics/ethicsFramework.js

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

class EthicsFramework {
    constructor() {
        this.rules = [];
        logger.info('EthicsFramework initialized.');
    }

    addRule(rule) {
        this.rules.push(rule);
        logger.info(`Rule added: ${rule.description}`);
    }

    checkAction(action) {
        for (const rule of this.rules) {
            if (!rule.check(action)) {
                logger.warn(`Action failed rule: ${rule.description}`);
                return false;
            }
        }
        logger.info('Action passed all rules.');
        return true;
    }
}

export { EthicsFramework };
