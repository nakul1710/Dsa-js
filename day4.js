//1. Single element in a sorted array

var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        // Ensure mid is even
        if (mid % 2 === 1) mid--;

        if (nums[mid] === nums[mid + 1]) {
            // single element is on the right
            start = mid + 2;
        } else {
            // single element is on the left (including mid)
            end = mid;
        }
    }

    return nums[start];
};


//2. Sort Colors


var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    function swap(nums, i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    while (mid <= high) {
        if (nums[mid] === 0) {
            swap(nums, low, mid);
            low++;
            mid++;
        } 
        else if (nums[mid] === 1) {
            mid++;
        } 
        else { // nums[mid] === 2
            swap(nums, mid, high);
            high--;
        }
    }
};


//3.

var maxSubArray = function(nums) {
    let currSum = nums[0];
    let max = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(currSum + nums[i] > nums[i]){
            currSum += nums[i];
        }
        else{
            currSum = nums[i];
        }
        if(currSum > max){
            max = currSum;
        }
    }

    return max;
};


//4.

var trap = function(height) {
    let n = height.length;

    let leftMax = [];
    leftMax[0] = height[0];

    for(let i = 1; i < n; i++){
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }

    let rightMax = [];
    rightMax[n-1] = height[n-1];

    for(let i = n-2; i >= 0; i--){
        rightMax[i] = Math.max(rightMax[i+1], height[i]);
    }

    let ans = 0;

    for(let i = 0; i < n; i++){
        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return ans;
};



//5.


var targetIndices = function(nums, target) {

    let n = nums.length;
    let num = 0;     
    let tcount = 0; 
    for(let i = 0; i < n; i++){
        if(nums[i] === target){
            tcount++;
        } else if(nums[i] < target){
            num++;
        }
    }

    let ans = [];
    while(tcount > 0){
        ans.push(num);
        num++;
        tcount--;
    }

    return ans;   
};

//6.
var maximumCount = function(nums) {
    let pos = 0;
    let neg = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            pos++;
        } else if (nums[i] < 0) {
            neg++;
        }
    }

    let ans = Math.max(pos, neg);
    return ans;
};