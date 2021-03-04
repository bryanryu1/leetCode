// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    let words = s.trim().split(' ')
    let count = words[words.length -1].split('')
    if(words[words.length -1] == ""){
        return 0
    }
    return count.length
};

// Super downvoted problem on leetcode probably because the edge cases are weird and frustrating. Solution uses obscure javascript string function .trim() which eliminates white space in the string.
// To find the length of the last word count is the words array last index word and split the word into separate letters. Return 0 if that word is empty string, else return the length using .length.