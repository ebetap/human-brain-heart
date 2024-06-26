// test/ethics/ethicsFramework.test.js
import { EthicsFramework } from '../../src/ethics/ethicsFramework.js';
import { noHarmRule, privacyRule, fairnessRule } from '../../src/ethics/ruleChecker.js';
import { assert } from 'chai';

describe('EthicsFramework', () => {
    it('should validate actions correctly', () => {
        const ethics = new EthicsFramework();
        ethics.addRule(noHarmRule);
        ethics.addRule(privacyRule);
        ethics.addRule(fairnessRule);

        const ethicalAction = { type: 'help', target: 'human' };
        const unethicalAction = { type: 'access_private_data' };

        assert.isTrue(ethics.checkAction(ethicalAction), 'Action should be ethical');
        assert.isFalse(ethics.checkAction(unethicalAction), 'Action should be unethical');
    });
});
