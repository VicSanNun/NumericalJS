class Probability {
    
    static Average(data) {
        let sum = 0;
        let result = data.reduce((sum, item) => {
            return sum+=item;
        })
        return (result/data.length);
    }

    static Variance(data, average) {
        if(average == null) {
            average = Average(data);
        }
        const n = data.length;
        let sum = 0;
        for(let i = 0; i < n; i++) {
            sum += (data[i] - average);
        }
    }

}
