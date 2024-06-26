// src/ethics/ruleChecker.js

class Rule {
    constructor(description, checkFunction) {
        this.description = description;
        this.check = checkFunction;
    }
}

const noHarmRule = new Rule(
    'The robot should not harm humans.',
    (action) => action.type !== 'harm' || action.target !== 'human'
);

const privacyRule = new Rule(
    'The robot should respect human privacy.',
    (action) => action.type !== 'access_private_data'
);

const fairnessRule = new Rule(
    'The robot should act fairly.',
    (action) => action.type !== 'discriminate'
);

export { Rule, noHarmRule, privacyRule, fairnessRule };
