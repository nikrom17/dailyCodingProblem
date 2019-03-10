function arrayProduct(n) {
    let product = 1;
    let productArray = []
    if (n.length > 1) {
        for (i = 0; i < n.length; i++) {
            product *= n[i]
        }
        for (i = 0; i < n.length; i++) {
            productArray[i] = product / n[i];
        }
    }
    return productArray;
}

function arrayProductBrute(n) {
    let productArray = []
    for (i = 0; i < n.length; i++) {
    let product = 1;
        for (j = 0; j < n.length; j++) {
            if (i != j) {
                product *= n[j];
            }
        productArray[i] = product;
        }
    }
    return productArray;
}

n = [1];
m = [3,2,1];
console.log(arrayProduct(n));
console.log(arrayProduct(m));

// Unit Tests 
var expect = require('chai').expect;

describe('arrayProduct - Test logic', function() {
	it('should return [120, 60, 40, 30, 24]', function() {
		n = [1, 2, 3, 4, 5];
        let result = arrayProduct(n);
        const solution = [120, 60, 40, 30, 24];
        //use deep equal ( == ) vs ( === )
        //tests fail on '===' due to objects not being the same objects
		expect(result).to.deep.equal(solution);
	});
	it('should return [2, 3, 6]', function() {
		n = [3, 2, 1];
		let result = arrayProduct(n);
		expect(result).to.deep.equal([2, 3, 6]);
	});
});
describe('arrayproducr - Check Edge Cases', function() {
	it('should return []', function() {
		n = [1];
        let result = arrayProduct(n);
        const solution = [];
        //use deep equal ( == ) vs ( === )
        //tests fail on '===' due to objects not being the same objects
		expect(result).to.deep.equal(solution);
	});
	it('should return []', function() {
		n = [];
		let result = arrayProduct(n);
        const solution = [];
        expect(result).to.deep.equal(solution);
	});
});