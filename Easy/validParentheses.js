// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
    const stack =[]
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
    for (i = 0; i < s.length; i++){
        if (stack.length > 0 && map[stack[stack.length-1]] === s[i]){
            stack.pop()
        } else{
            stack.push(s[i])
        }
    }
    return stack.length ? false: true
}

// Solution uses a hash map and an array to hold parentheses. If there is a parenthesis in the stack && the current element closes the parenthesis, just pop off the opening element in the stack. Otherwise, push the element onto the stack and move onto the next element in the string s. 

// If all parenthesis have been closed the stack should be empty as everything would have been popped off. If the parenthesis are not valid they would not pop off and there would be values still in the stack array. 