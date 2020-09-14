/**
 * https://leetcode.com/problems/happy-number/
 * "Write an algorithm to determine if a number n is "happy".
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of
 * the squares of its digits, and repeat the process until the number equals 1
 * (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy numbers.
 * Return True if n is a happy number, and False if not."
 */

//brainstorming and psuedocode:
//return true if number is "happy", otherwise return false
//32// 3^2 + 2^2 = 13// 1^2 + 3^2 = 10// 1^2 + 0^2// 1 = true
//73// 7^2 + 3^2 = 58// 5^2 + 8^2// 89// 8^2 + 9^2 = 145// 1^2 + 4^2 + 5^2 = 42// = 20 = 4 = 16 = 37// 3^2 + 7^2 = 58 ..
//we have seen 58 before which means we would just keep looping, this means we would have false
//if it equals 1, then it's true
//if it is an infinite loop return false;
//how to check if something is an infinite loop?
//while sum does not equal 1?
//have a set, of all of the sums.. if the new sum is in the set, return false, otherwise keep looping until one.
//have a set
//keep updating n?
//while n !== 1, while n !== 0 .. let digit = Math.floor(n/10).. sum != digit * digit.. Math.floor()

//code:
var isHappy = function (n) {
	let seenSums = new Set();

	while (n !== 1) {
		let sum = 0;
		let digit;
		while (n !== 0) {
			digit = Math.floor(n % 10);
			sum += digit * digit;
			n = Math.floor(n / 10);
		}
		if (seenSums.has(sum)) {
			return false;
		} else {
			seenSums.add(sum);
			n = sum;
		}
	}
	return true;
};
