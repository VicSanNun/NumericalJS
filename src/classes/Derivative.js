class Derivative {
    static Diff(fn, x, step) {
        return((fn(x+step) - fn(x))/step);
    }
}

module.exports = Derivative;