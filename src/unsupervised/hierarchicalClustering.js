
// src/unsupervised/hierarchicalClustering.js
import { agnes } from 'ml-hclust';

class HierarchicalClustering {
    constructor() {
        this.clusters = null;
    }

    fit(X) {
        this.clusters = agnes(X);
    }

    predict(X) {
        // Hierarchical clustering typically doesn't have a predict method.
        // Instead, the fit method is used to create a dendrogram which can be cut at a specific level.
        return this.clusters;
    }
}

export { HierarchicalClustering };
