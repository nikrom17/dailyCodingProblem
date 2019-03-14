function firstMissingPositive(nums) {
    if (nums) {
        for (i = 0; i < nums.length; i++) {
            console.log(nums);
            while (i + 1 != nums[i] && 0 < nums[i] <= nums.length) {
                val = nums[i];
                //swap elements
                nums[i] = nums[val -i];
                nums[val - i] = nums[i];
                if (nums[i] === nums[val - 1]) {
                    break;
                }
            }
        }
        for (i = 0; i < nums.length; i++) {
            if (nums[i] != i + 1) {
                return (i + 1);
            }
        } 
    } else {
        return 1;
    }
}

var expect = require('chai').expect;

describe('Test logic', function() {
    it('[3, 4, -1, 1] should return 2', function() {
        n = [3, 4, -1, 1];
        let result = firstMissingPositive(n);
        const solution = 2;
        expect(result).to.equal(solution);
    });
    it('[3, 4, -1, 1, -9, 0, 2, 7, 3, 3, 1, 6] should return 5', function() {
        n = [3, 4, -1, 1, -9, 0, 2, 7, 3, 3, 1, 6];
        let result = firstMissingPositive(n);
        const solution = 5;
        expect(result).to.equal(solution);
    });
});

