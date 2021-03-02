// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    let numObj = {}
    for (i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if (numObj[diff] !== undefined && numObj[diff] !== i){
            return [i, numObj[diff]]
        } else{
            numObj[nums[i]] = i
        }
        }
    
};

// My solution uses a hash table. If the difference is a value in the hash table, solution returns index of the number and the difference. If not, the number is added into the hash.