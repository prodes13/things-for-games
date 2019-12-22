// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:

// All given inputs are in lowercase letters a-z.

// HORIZONTAL METHOD
// VERTICAL METHOD 
var longestCommonPrefix = function(strs) { 
	// prefix =''
	// Loop through characters(char, index)
	//	Loop through strs (str)
	// 		if str[index] != char
	//			return prefix
	//	prefix = prefix + char
	// return prefix
	let prefix = '';
	if(strs.length === 0) return prefix;
	for(let i = 0; i < strs[0].length; i++) {
		const character = strs[0][i];
		for(let j = 0; j < strs.length; j++) {
			if(strs[j][i] != character) return prefix;
		}
		prefix = prefix + character;
	}
	return prefix;
}