class Statistics {
    static Average(data) {
        let result = data.reduce((sum, item) => sum+=item);
        return (result/data.length);
    }

    static Variance(data, average = null) {
        if(average == null) {
            average = this.Average(data);
        }

        return data.reduce((sum, item) => sum+=(item - average));
    } 
}

module.exports = Statistics;