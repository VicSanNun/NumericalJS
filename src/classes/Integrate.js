class Integrate {
    
    static Trapezio(fn, a, b) {
        return ((b - a)*(fn(b)+fn(a))/(2));
    }

    static Simpson(fn, a, b) {
        const x0 = a;
        const x1 = (a + b)/2;
        const x2 = b;
        const h = (b - a)/2;

        return ((h/3)*(fn(x0)+4*fn(x1)+fn(x2)));
    }

}

module.exports = Integrate;