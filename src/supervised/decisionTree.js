// src/supervised/decisionTree.js
import { DecisionTreeClassifier } from 'ml-cart';

class DecisionTree {
    constructor() {
        this.model = null;
    }

    fit(X, y) {
        this.model = new DecisionTreeClassifier();
        this.model.train(X, y);
    }

    predict(X) {
        return this.model.predict(X);
    }
}

export { DecisionTree };
