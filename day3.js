//1. Container with most water

var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxCap = 0;

    while (start < end) {
        let h = Math.min(height[start], height[end]);
        let width = end - start;
        let currCap = h * width;

        maxCap = Math.max(currCap, maxCap);

        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return maxCap;
};



//2. Incresing triplet sequence

var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    let third = Infinity;

    for(let i=0; i<nums.length; i++){
        if(nums[i]<=first){
            first=nums[i];
        }else if(nums[i]<=second){
            second=nums[i];
        }else{
            third=nums[i];
            return true;
        }
    }
    return false;
};


//3. Maximum Ascending sub array

var maxAscendingSum = function(nums) {
    let max = nums[0];
    let currmax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            currmax += nums[i];
        } else {
            max = Math.max(max, currmax);
            currmax = nums[i];
        }
    }

    return Math.max(max, currmax);
};


//4. Find Lucky integer in an array

var findLucky = function(arr) {
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }

    let ans = -1;
    for (let x in freq) {
        if (+x === freq[x]) ans = Math.max(ans, +x);
    }

    return ans;
};



//5. Binary search

var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};


//6. first and last position in array

var searchRange = function(nums, target) {

    function findFirst() {
        let start = 0, end = nums.length - 1;
        let ans = -1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                ans = mid;
                end = mid - 1;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }

    function findLast() {
        let start = 0, end = nums.length - 1;
        let ans = -1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                ans = mid;
                start = mid + 1;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }

    return [findFirst(), findLast()];
};


//7. Search in roatated sorted array

var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;

        // Left half sorted
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        // Right half sorted
        else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};


//8. Find peak Element

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
};
