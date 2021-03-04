// Given two binary strings a and b, return their sum as a binary string.

var addBinary = function(a, b) {
    a = parseInt(a, 2)
    b = parseInt(b,2)
    let sum = a + b
    return (sum >>> 0).toString(2)
};

// Easy solution here with some javascript functions. Parse int function finds the integer value given the base inputed, in this case it's 2 becauase binary digits are given. After finding the sum of the integer values, return the sum as a binary string using the toString function with radix value 2 to convert back to bianry. 