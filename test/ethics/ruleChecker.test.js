
// test/ethics/ruleChecker.test.js
import { noHarmRule, privacyRule, fairnessRule } from '../../src/ethics/ruleChecker.js';
import { assert } from 'chai';

describe('RuleChecker', () => {
    it('should apply noHarmRule correctly', () => {
        const action1 = { type: 'harm', target: 'human' };
        const action2 = { type: 'help', target: 'human' };

        assert.isFalse(noHarmRule.check(action1), 'Action should not harm humans');
        assert.isTrue(noHarmRule.check(action2), 'Action should be allowed');
    });

    it('should apply privacyRule correctly', () => {
        const action = { type: 'access_private_data' };

        assert.isFalse(privacyRule.check(action), 'Action should respect privacy');
    });

    it('should apply fairnessRule correctly', () => {
        const action = { type: 'discriminate' };

        assert.isFalse(fairnessRule.check(action), 'Action should act fairly');
    });
});
