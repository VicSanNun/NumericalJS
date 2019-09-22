var Integrate = /** @class */ (function () {
    function Integrate() {
    }
    Integrate.Trapezio = function (fn, a, b) {
        return ((b - a) * (fn(b) + fn(a)) / (2));
    };
    Integrate.Simpson = function (fn, a, b) {
        var x0 = a;
        var x1 = (a + b) / 2;
        var x2 = b;
        var h = (b - a) / 2;
        return ((h / 3) * (fn(x0) + 4 * fn(x1) + fn(x2)));
    };
    return Integrate;
}());
module.exports = Integrate;
