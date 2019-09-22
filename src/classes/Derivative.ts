class Derivative {
    static Diff(fn: Function, x:number, step:number):number {
        return((fn(x+step) - fn(x))/step);
    }
}

module.exports = Derivative;