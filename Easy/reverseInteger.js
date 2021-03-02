//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

var reverse = function(x) {
    const split = x.toString().split('').reverse().join('')
    const number = parseFloat(split)
    if (number > 2**31){
        return 0
    } else{
            return number * Math.sign(x)

    }
};

// My solution uses javascript methods to turn the NUMBER into a STRING split into ARRAY then reverse and join back into a STRING. ParseFloat function to turn the string back into a NUMBER. Because of the 32-bit integer stipulation, there is a check to see if the number is larger than 2**31.
// If the number is not larger than 32 bits, return the number multiplied by the sign of the original number x and return. 