// src/unsupervised/pca.js
import { PCA as MLPCA } from 'ml-pca';

class PCA {
    constructor() {
        this.model = null;
    }

    fit(X) {
        this.model = new MLPCA(X);
    }

    transform(X) {
        return this.model.predict(X);
    }
}

export { PCA };
