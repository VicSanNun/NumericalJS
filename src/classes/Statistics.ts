class Statistics {
    static Average(data: Array<number>): number {
        let result = data.reduce((sum: number, item: number) => sum+=item);
        return (result/data.length);
    }

    static Variance(data: Array<number>, average: number = null): number {
        if(average == null) {
            average = this.Average(data);
        }

        return data.reduce((sum, item) => sum+=(item - average));
    } 
}

module.exports = Statistics;