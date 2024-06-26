// src/index.js

import { LinearRegression } from './supervised/linearRegression.js';
import { LogisticRegression } from './supervised/logisticRegression.js';
import { DecisionTree } from './supervised/decisionTree.js';
import { SVM } from './supervised/svm.js';
import { KMeans } from './unsupervised/kMeans.js';
import { HierarchicalClustering } from './unsupervised/hierarchicalClustering.js';
import { PCA } from './unsupervised/pca.js';
import { math } from './utils/mathUtils.js';
import { dataProcessing } from './utils/dataProcessing.js';
import { EthicsFramework } from './ethics/ethicsFramework.js';
import { Rule, noHarmRule, privacyRule, fairnessRule } from './ethics/ruleChecker.js';

export {
    LinearRegression,
    LogisticRegression,
    DecisionTree,
    SVM,
    KMeans,
    HierarchicalClustering,
    PCA,
    math,
    dataProcessing,
    EthicsFramework,
    Rule,
    noHarmRule,
    privacyRule,
    fairnessRule
};
