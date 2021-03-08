// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

var sortedArrayToBST = function(nums) {
    if (nums == null || !nums.length) {
        return null;
    }
    
    let mid = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
    return node;
};

// This algo was tricky.

//Solution: If nums is null or there is no length in the array, return null. Set variable mid equal to the floor of the length of the array / 2. Set a new treenode equal to the num array index mid. For the left values, recurse the function using the array up to the index of mid. For the right use the index above mid to the last value. This will allow all the values in the sorted array to become sorted all the way down. At the end return the node, which should have the sorted tree added as the correct values. 