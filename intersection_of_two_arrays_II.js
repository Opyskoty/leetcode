/**"Given two arrays, write a function to compute their
 * intersection." https://leetcode.com/problems/intersection-of-two-arrays-ii/
 *
 * takes in two arrays
 * they could either be equal length, or of different lengths
 * return a new array of their intersection
 * [1,2,3,4,5,6] && [3,4,4,5,8,9] = [3,4,5]
 * {1:1, 2:1, 3:0, 4:0, 5:0, 6:1} //[3,4,5]
 *         i
 * [[3,4,4,5,8,9]
 * make freqcounter for first array
 * loop through second and see if its in freq counter, if so, push and
 * subtract from freq
 *  */

var intersect = function (nums1, nums2) {
  let hash = freqCounter(nums1);
  let intersection = [];

  for (let i = 0; i < nums2.length; i++) {
    if (hash[nums2[i]] > 0) {
      intersection.push(nums2[i]);
      hash[nums2[i]] -= 1;
    }
  }
  return intersection;
};

const freqCounter = (arr) => {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    let valCount = freq[arr[i]] || 0;
    freq[arr[i]] = valCount += 1;
  }
  return freq;
};
