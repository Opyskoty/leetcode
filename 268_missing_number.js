/**
 * 268. Missing Number:
    * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
    * find the one that is missing from the array.
 */


 
/**
 * @param {number[]} nums
 * @return {number}
 */
//takes in an array
//find the smallest missing number
//[1,2,3,4] = 0
//[0,1,2,4,5] = 3
//put array into a set so first would be : {1,2,3,4}
//then loop til the end of the array, and see if set.has(i)

var missingNumber = function (nums) {
  let numsSet = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!numsSet.has(i)) return i;
  }
};
