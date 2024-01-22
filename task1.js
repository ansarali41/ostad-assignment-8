function binarySearch(nums, target) {
    let start = 0,
        end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));

/* 
Time complexity: O(log n)

Space complexity: O(n)
*/
