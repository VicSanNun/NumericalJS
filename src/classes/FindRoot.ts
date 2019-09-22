class FindRoot {
    static Bhaskara(a:number, b:number, c:number) {
        const delta = ((b*b)-(4*a*c));
		
        if (delta < 0) { 
            return ("Don't exists real roots");
        }

	    const x1 = (-b + Math.sqrt(delta))/2*a;
	    const x2 = (-b - Math.sqrt(delta))/2*a;

	    return [x1, x2];
    }
}

module.exports = FindRoot;