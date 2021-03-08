// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root, depth = 1) {
    if (root === null){
        return 0
    }
    if (root.right == null && root.left == null){
        return depth
    }
    if (root.right || root.left){
        return Math.max(maxDepth(root.right, depth + 1), maxDepth(root.left, depth + 1)) }
    }

//Solution is relatively straight forward. I added a count variable in the arguments of the function named depth. It starts at 1 as if its a viable binary tree it will have at least one node at depth 1. If the root is null, return 0, if both root.right and root.left are null you've reached the end of the tree and you should return the depth. Otherwise continue with diving down the tree and return the maximum value between recursing the left value vs the right value. 