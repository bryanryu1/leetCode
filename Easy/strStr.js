// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    if (needle === ''){
        return 0
    }
    
    return haystack.indexOf(needle)
};

// Super simple solution for javascript. I think this problem might be a little bit more difficult in other languages? But if needle is empty return 0, you cant find something that doesn't exist. Javascript indexOf() takes care of this algo. It even returns -1 if it can't find the needle in the haystack haha.