// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


var maxSubArray = function(nums) {

    let max = Number.NEGATIVE_INFINITY
    let sum = 0
    for (i = 0; i < nums.length; i++) {
        sum += nums[i]
        max = Math.max(max, sum)
        if (sum < 0) sum = 0
    }
    return max
};

// Solution involves some javascript number knowledge. Set max to negative infinity because the numbers in the array are not all positive.
// For each element in the array add the element to the sum and compare it with max. If it is greater than the max, max will become the value of sum. Then theres a check to see if sum < 0 because if it is, you would simply be subtracting from the next value. If it is negative, reset the value of sum to 0. 
// When the array is iterated through, return the max value found in a subarray in the nums array. 