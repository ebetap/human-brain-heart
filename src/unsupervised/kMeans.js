// src/unsupervised/kMeans.js
import { KMeans as MLKMeans } from 'ml-kmeans';

class KMeans {
    constructor(k) {
        this.k = k;
        this.model = null;
    }

    fit(X) {
        this.model = new MLKMeans(X, this.k);
    }

    predict(X) {
        return this.model.predict(X);
    }
}

export { KMeans };
