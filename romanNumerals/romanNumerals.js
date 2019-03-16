/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = ''
    
    while(num) {
        if (num >= 1000) {
            roman += 'M';
            num -= 1000;
        } else if (num >= 500) {
            if (num - 900 >= 0) {
                roman += 'CM'
                num -= 900;
            } else {
                roman += 'D';
                num -= 500;                
            }            
        } else if (num >= 100) {
            if (num - 400 >= 0) {
                roman += 'CD';
                num -= 400;
            } else {
                roman += 'C';
                num -= 100;
            }
        } else if (num >= 50) {
            if (num - 90 >= 0) {
                roman += 'XC';
                num -= 90;
            } else {
                roman += 'L';
                num -= 50;                
            }
        } else if (num >= 10) {
            if (num - 40 >= 0) {
                roman += 'XL';
                num -= 40;
            } else {
                roman += 'X';
                num -= 10;               
            }    
        } else if (num >= 5) {
            if (num == 9) {
                roman += "IX";
                num -= 9;
            } else {
                roman += 'V';
                num -= 5;
            }
        } else {
            if (num === 4) {
                roman += 'IV';
                num -= 4;
            } else {
                roman += 'I';
                num -= 1;                
            }
        }
    }
    return roman;
};


var expect = require('chai').expect;

describe('intToRoman - Logic Check', function() {
	it(' 4 should return IV', function() {
		const num = 4;
        const result = intToRoman(num);
        const solution = 'IV';
		expect(result).to.equal(solution);
    });
	it(' 9 should return IX', function() {
		const num = 9;
        const result = intToRoman(num);
        const solution = 'IX';
		expect(result).to.equal(solution);
    });
	it('58 should return LVIII', function() {
		const num = 58;
        const result = intToRoman(num);
        const solution = 'LVIII';
		expect(result).to.equal(solution);
    });
	it('1994 should return MCMXCIV', function() {
		const num = 1994;
        const result = intToRoman(num);
        const solution = 'MCMXCIV';
		expect(result).to.equal(solution);
    });
});