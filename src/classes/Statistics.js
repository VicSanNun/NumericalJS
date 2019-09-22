class Statistics {
    static Average(data) {
        const result = data.reduce((sum, item) => sum+=item);
        return (result/data.length);
    }

    static Variance(data, average = null) {
        if(average == null) {
            average = this.Average(data);
        }

        const sum = data.reduce((sum, item) => sum+=Math.pow((item - average), 2));
        
        return (sum/(data.length - 1));
    } 
}

module.exports = Statistics;