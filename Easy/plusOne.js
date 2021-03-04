// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function(digits) {
    for(let i = digits.length -1; i >= 0; i--){
        digits[i]++
        if (digits[i] < 10 ){
            return digits
        } else {digits[i] = 0
               }
    }
    digits.unshift(1)
    return digits
}; 

// Another heavily downvoted question with frustrating edgecases. Solution increments backward starting at the last element. Add one to the last digit and if the last digit is less than 10 simply return. Otherwise, set digit[i] to 0 and move onto the next digit and repeat. 
// Unshift one is needed in the edge case of 9 or 99 or 999... In that case the for loop would give return back 0 or 00 so forth. You must add one to the beginning for those edge cases before returning. 