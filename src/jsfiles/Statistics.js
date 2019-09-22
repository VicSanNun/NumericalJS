var Statistics = /** @class */ (function () {
    function Statistics() {
    }
    Statistics.Average = function (data) {
        var result = data.reduce(function (sum, item) { return sum += item; });
        return (result / data.length);
    };
    Statistics.Variance = function (data, average) {
        if (average === void 0) { average = null; }
        if (average == null) {
            average = this.Average(data);
        }
        return data.reduce(function (sum, item) { return sum += (item - average); });
    };
    return Statistics;
}());
module.exports = Statistics;
