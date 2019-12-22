// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
	const a = [];
	let carryOver = 0;
	while(l1 != null || l2 != null) {
		let v1 = 0;
		let v2 = 0;
		l1 && v1 = l1.val;
		l2 && v2 = l2.val;

		let sum = v1 + v2 + carryOver;
		carryOver = Math.floor(sum / 10);
		sum = sum % 10;
		a.push(sum);

		l1 != null && l1 = l1.next;
		l2 != null && l2 = l2.next;
	}
}