var Derivative = /** @class */ (function () {
    function Derivative() {
    }
    Derivative.Diff = function (fn, x, step) {
        return ((fn(x + step) - fn(x)) / step);
    };
    return Derivative;
}());
module.exports = Derivative;
