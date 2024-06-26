// src/utils/dataProcessing.js
const dataProcessing = {
    normalize: function (data) {
        const mean = data.reduce((acc, val) => acc.map((num, i) => num + val[i]), new Array(data[0].length).fill(0)).map(num => num / data.length);
        const stdDev = data.reduce((acc, val) => acc.map((num, i) => num + (val[i] - mean[i]) ** 2), new Array(data[0].length).fill(0)).map(num => Math.sqrt(num / data.length));

        return data.map(row => row.map((val, i) => (val - mean[i]) / stdDev[i]));
    },
    standardize: function (data) {
        // Same as normalize for simplicity
        return this.normalize(data);
    },
};

export { dataProcessing };
