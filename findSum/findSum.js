//Brute Force Solution
//O(n^2) time complexity
//O(1) space complexity
function findSumN2(n, k) {
	for (i = 0; i < (n.length - 1); i++) {
		for (j = 1; j < n.length; j++) {
			if (n[i] + n[j] === k) {
				return true;            }
		}
	}
	return false;
}

//OptimizedSolution
//O(n) time complexity
//O(n) space complexity
function findSum(n, k) {
	let pairs = new Set();
	for (i = 0; i < n.length; i++) {
		if (pairs.has(n[i])) {
			return true;
		}
		else {
			pairs.add(k - n[i])
		}
	}
	return false;
}

// Unit Tests 
var assert = require('assert');

describe('findSum - Test logic', function() {
	it('should return true', function() {
		n = [0, 1, 10, 20, 4];
		k = 5;
		let isValid = findSum(n, k);
		assert.equal(isValid, true);
	});
	it('should return false', function() {
		n = [0, 1, 10, 20, 3];
		k = 5;
		let isValid = findSum(n, k);
		assert.equal(isValid, false);
	});
});

describe('findSum - Edge Case: Empty List', function() {
	it('should return false', function() {
		n = [];
		k = 5;
		let isValid = findSum(n, k);
		assert.equal(isValid, false);
	});
});

describe('findSum - Edge Case: List length = 1', function() {
	it('should return false', function() {
		n = [1];
		k = 5;
		let isValid = findSum(n, k);
		assert.equal(isValid, false);
	});
});

describe('findSumN2 - Test logic', function() {
	it('should return true', function() {
		n = [0, 1, 10, 20, 4];
		k = 5;
		let isValid = findSumN2(n, k);
		assert.equal(isValid, true);
	});
	it('should return false', function() {
		n = [0, 1, 10, 20, 3];
		k = 5;
		let isValid = findSumN2(n, k);
		assert.equal(isValid, false);
	});
});

describe('findSumN2 - Edge Case: Empty List', function() {
	it('should return false', function() {
		n = [];
		k = 5;
		let isValid = findSumN2(n, k);
		assert.equal(isValid, false);
	});
});

describe('findSumN2 - Edge Case: List length = 1', function() {
	it('should return false', function() {
		n = [1];
		k = 5;
		let isValid = findSumN2(n, k);
		assert.equal(isValid, false);
	});
});
