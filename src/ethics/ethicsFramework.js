// src/ethics/ethicsFramework.js

class EthicsFramework {
    constructor() {
        this.rules = [];
    }

    addRule(rule) {
        this.rules.push(rule);
    }

    checkAction(action) {
        for (const rule of this.rules) {
            if (!rule.check(action)) {
                return false;
            }
        }
        return true;
    }
}

export { EthicsFramework };
