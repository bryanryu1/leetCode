//Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    let common = ""
    if (strs.length === 0 || !strs){
        return common
    }
    for (i = 0; i < strs[0].length; i++){
        const char = strs[0][i]
        for (j = 0; j < strs.length; j++){
            if (strs[j][i] !== char){
                return common
            } 
        }
        common = common + char

    }
    return common
};

// Straight forward nested loop solution. First for loop examines letters in str[0] second one compares the other strings with the index of the same letter in the other strings. If all are the same, they're part of the prefix and added to the common string. Once the strings have different letters, the string is returned.