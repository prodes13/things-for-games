// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assuma that each input would have exactly one solution, and you may not use the same element twice;
// Given nums = [2, 7, 11, 15], target = 9,
// Because num[0] + nums[1] = 2 + 7 = 9;
// return [0, 1]
var twoSum = function(nums, target) {
	const previousValues = {};
	for(let i = 0; i < nums.length; i++) {
		const currentNumber = nums[i];
		const neededValue = target - currentNumber;
		const index2 = previousValues[neededValue];
		if(index2 != null) {
			return [index2, i];
		} else {
			previousValues[currentNumber] = i;
		}
	}
}
twoSum([2, 7, 11, 15], 9);