/**Write a program that finds the length of the maximal sequence of equal elements in an array of N integers. */
/**Print the length of the maximal sequence */

function findMaxSeq(nums) {
    var currentSequence = 1,
        longestSequence = 1,
        maxSeqNum = nums[0]; /** */

    for (var i = 1; i < nums.length; i++) {
        if(nums[i-1] === nums[i]) { /**start from the last index and compare with the first */
            currentSequence++;
            if (currentSequence >= longestSequence) {
                longestSequence = currentSequence; 
                maxSeqNum = nums[i];  /**max sequence number is = to current index value */
           //   console.log(nums[i]);
            }
        }
        else {
            currentSequence = 1; //if two elements are not equal, temporary counter = 1
        }
    } console.log(maxSeqNum);
}

findMaxSeq([2, 1, 1, 2, 3, 3, 3, 3, 2, 2, 1]); // OUTPUT : 3