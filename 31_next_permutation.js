/**
 * Implement next permutation, which rearranges numbers into the
 * lexicographically next greater permutation of numbers.
 * If such an arrangement is not possible, it must rearrange it as the
 * lowest possible order (i.e., sorted in ascending order).
 * The replacement must be in place and use only constant extra memory.
 *
 * https://leetcode.com/problems/next-permutation/
 *
 * super ugly working solution
 */

/**
 * we want to work backwards from the array and find the first
 * decreasing number and save it in a variable
 * then we loop backwards again trying to find the first
 * number thats greater than decreasing number -- swap these
 * then from decreasing number to end of array, we reverse the
 * numbers (which is really sorting in ascending order)
 *
 * pseudocode from:
 *  https://www.geeksforgeeks.org/find-next-greater-number-set-digits/
 */

function nextPermutation(nums) {
	let descendingNum;
	let descendingNumIdx;

	//loop from the end to find the first descending number:
	for (let i = nums.length - 1; i > 0; i--) {
		if (nums[i] - nums[i - 1] > 0) {
			descendingNum = nums[i - 1];
			descendingNumIdx = i - 1;
			//we want to stop looping
			break;
		}
	}

	//if we never find a descending number, we just reverse:
	//(note, can't do !descendingNum because if it's 0 this will
	//be true and return the reversed arr)
	if (descendingNum === undefine) return nums.reverse();

	let nextHighest;
	let nextHighestIdx;

	//now loop from the end until the descending number to try and
	//find the next highest in the array.. if we have gotten this far
	//there will be one

	for (let i = nums.length - 1; i > descendingNumIdx; i--) {
		if (nums[i] > descendingNum) {
			nextHighest = nums[i];
			nextHighestIdx = i;
			//we only want the first one, so we stop looping when
			//we find it
			break;
		}
	}

	//now we swap
	[nums[descendingNumIdx], nums[nextHighestIdx]] = [nums[nextHighestIdx], nums[descendingNumIdx]];

	//now we reverse from descendingNumIdx + 1
	let start = descendingNumIdx + 1;
	let end = nums.length - 1;

	while (start < end) {
		[nums[start], nums[end]] = [nums[end], nums[start]];
		start++;
		end++;
	}
	return nums;
}
