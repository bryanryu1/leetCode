// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
    const arr = [1,1]
    if (n > 1){
        for (i = 2; i <= n; i++){
            arr[i] = arr[i-1] + arr[i-2]
        }
    }
    return arr[n]
};

// I arrived at this solution after looking at the pattern for the staircase solutions. 2 steps has 2 ways of reaching, 3 =3, 4= 5, 5=8, 6 = 13. The next increment is the addition of the # of combinations in the step below and the one two steps below. To implement this pattern in code, I use an array that starts at [1,1] before incrementing up in that pattern to find the # of ways n steps can be taken. 
// At the end return array index of n for the answer because index 0 and 1 are already both one.