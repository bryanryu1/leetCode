// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function(p, q) {
    if (p == null && q == null){
        return true
    } else if (p== null || q== null){
        return false
    }
    if (p.val == q.val){
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    } else {
        return false
    }

    //   if (p === null || q === null) return (p === q);
    // return ((p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
};

//There are two solutions for this algo. The one that isn't commented out is my solution and the one below is a more elegant solution that I found online. Both have similar runtimes. 

//Solution 1: In the case that both p and q are null return true, if one or the other is null return false and if p = q, recurse through and check if the left and right values are the same too. This continues down and if they are the same tree they would rtuen true back up and if there was a false somewhere that value would come up as well. 

//Solution 2: In this solution if either p or q are null, It returns p === q to check if the two values are equal. Otherwise, it returns p = q and the recursions all in one as if even one of them were to come up false, the tree would not be the same and hence be false. 