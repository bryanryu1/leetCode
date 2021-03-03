// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

var searchInsert = function(nums, target) {
    let left = 0
    let mid = 0
    let right = nums.length - 1
    
    if (!nums.length) return 0
    
    while (left <= right){
        mid = Math.floor((left + right)/2)
        if(nums[mid] > target){
            right = mid - 1
        } else if (nums[mid] < target){
            left = mid + 1
        } else {
            return mid
        }
    }
    return (nums[mid] > target) ? mid: mid +1
    }

    // Solution using pointers. Mid value is the middle value between the left and right. If the mid is greater than the target, bring down right by 1 and check again. If left is greater increment left by 1. The return is complicated because if you return just mid it fails an edge case. 

    // If the target is less than the number at the mid index, just return mid as it would take the index before it. However, if it happens to be larger, return mid + 1 so it takes the index that is higher than the value at index mid.