// src/supervised/svm.js
import SVM from 'ml-svm';

class SVM {
    constructor() {
        this.model = new SVM();
    }

    fit(X, y) {
        this.model.train(X, y);
    }

    predict(X) {
        return this.model.predict(X);
    }
}

export { SVM };
