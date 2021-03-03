// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0
    
    let i = 0 
    let j = 1
    
    while (j < nums.length){
        if (nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
            j++
        } else {
            j++
        }
    }
    return i+1
}

// The solution for this is tricky. First is just a check, if the nums array is empty return 0. If num at index i does not equal num at j (j being one index higher), increment i to increase the length by one make i = j and increment j by one. IF both are the same value increment j by one until they are not the same value.

// IE Given array [1,2,2,3]
//  i = 0, j = 1
//  1 !== 2
//  i = 1 -> nums[1] = 2 -> j = 2
//  2 == 2
//  i = 1, j = 3
//  2 !== 3
//  i = 2, nums[2] = 3, j = 4
//  j = nums.length -> break
//  return i + 1 = 3
