//Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function(x) {
    const reverse = x.toString().split('').reverse().join('')
    if (+reverse == x){
        return true
    } else{
        return false
    }
};

// Similar solution to that of reverse integer. Number -> String -> Array -> Reverse -> String. Use javascript trick of adding + to a string to make it a number to check if the number reversed is equal. If it is equal, it is a palindrome and return true. If not, return false.