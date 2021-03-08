// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function(nums) {
    let hash = {}
    let max = 0, num
    
    for(let i = 0; i < nums.length; i++){
        hash[nums[i]] ? hash[nums[i]]++ : hash[nums[i]] = 1
        if(hash[nums[i]] > max){
            max = hash[nums[i]]
            num = nums[i]
        }
    }
    
    return num
};

// This solution uses a hash table to track the number of times an element appears. It increments the value every time something comes up and keeps track of the highest value through the use of a max variable. Atttached to the max variable is the actual solution to the algorithm which is num. Everytime the value of max is changed, the value of num is changed to reflect the max. 