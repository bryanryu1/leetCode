// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

var isSymmetric = function(root) {
    if(root === null){
        return true
    }
    return symmetry(root.left, root.right)
};

const symmetry = (left, right) => {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    
    return (left.val === right.val && symmetry(left.right, right.left) && symmetry(left.left, right.right))
}

// A very difficult problem that was super confusing for me. It uses a helper function that does the actual work of checking for symmetry in the tree.

// If root is null return true. Otherwise return the function symmetry with root.left and root.right. The symmetry function takes the two left and right values and checks if the any of the values are null first before checking if they are equal and the recursing through to the lower levels. An interesting thing to note is that left.right is compared with right.left and vice versa. It makes sense once you look at the diagrams presented in the description of the problem. 