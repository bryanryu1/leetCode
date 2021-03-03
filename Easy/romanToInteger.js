// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


const conversion = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}

var romanToInt = function(s) {
    const letters = s.split('')
    let num = 0
    for (i = 0; i < letters.length; i++){
        const curr = conversion[letters[i]]
        const next = conversion[letters[i+1]]
        if(curr < next){
            num -= curr
        } else {
            num += curr
        }
    }
    return num
};

// Solution uses an object with the Roman Letter Numbers mapped out in their values. Roman number system works that IV = 4 meaning that 1 - 5 to make 4. To solve this if the letter in front is smaller than the one following it, you subtract the number from the total.