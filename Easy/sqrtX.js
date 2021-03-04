// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

var mySqrt = function(x) {
    let sqrt = Math.sqrt(x)
    return Math.floor(sqrt)
};

// Super simple solution with javascript. To find the square root of x use the Math function sqrt. In the case that a decimal value is returned (x not a perfect square) return the Math floor value of the square root. 