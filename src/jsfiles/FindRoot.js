var FindRoot = /** @class */ (function () {
    function FindRoot() {
    }
    FindRoot.Bhaskara = function (a, b, c) {
        var delta = ((b * b) - (4 * a * c));
        if (delta < 0) {
            return ("Don't exists real roots");
        }
        var x1 = (-b + Math.sqrt(delta)) / 2 * a;
        var x2 = (-b - Math.sqrt(delta)) / 2 * a;
        return [x1, x2];
    };
    return FindRoot;
}());
module.exports = FindRoot;
