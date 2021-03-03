// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

var removeElement = function(nums, val) {
    let count = 0
    for (i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[count] = nums[i]
            count++
        }
    }
    return count
};
// The solution skips over all numbers that equal val and overwrites them. This keeps the extra space at O(1).

// Similar in theory to the one before it, a little bit easier. Start count at 0 index. For loop i < nums array length. If the number at i index does not equal value, number at index of count will take the value of number at index i. Increment count by 1. When it does equal value, the value skips over it and count stays the same while i is incremented. In the next value where i does not equal value, nums at the same count index becomes the value of index i.
