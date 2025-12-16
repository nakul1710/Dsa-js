 //9. Missing number

 function missingNumber(nums) {
    let n = nums.length;
    let sum = (n*(n+1)/2);

    let currSum = 0;

    for(let i=0; i<nums.length; i++){
           currSum += nums[i];
    }

    let number = sum - currSum;
    return number;
};

//10. Mediun of two sorted arrays

function findMedianSortedArrays(nums1, nums2) {
    const merged = [];
    let p1 = 0, p2 = 0;

    // Merge step
    while (p1 < nums1.length || p2 < nums2.length) {
        const val1 = p1 < nums1.length ? nums1[p1] : Infinity;
        const val2 = p2 < nums2.length ? nums2[p2] : Infinity;

        if (val1 < val2) {
            merged.push(val1);
            p1++;
        } else {
            merged.push(val2);
            p2++;
        }
    }

    // Find median
    const n = merged.length;
    if (n % 2 === 1) {
        return merged[Math.floor(n / 2)];
    } else {
        return (merged[n / 2 - 1] + merged[n / 2]) / 2;
    }
}


//11. Max product of two elements in array

function maxProd(nums){
    let max1 = 0;
    let max2 = 0;
    
    for(let i=0; i<nums.length; i++){
     if(max1<nums[i]){
        max2 = max1;
        max1 = nums[i];
     }else if(max2<nums[i]){
        max2 = nums[i];
     }
}

return (max1-1)*(max2-1);

}



//12.Squares of sorted array
var sortedSquares = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    
    let left = 0;
    let right = n - 1;
    let pos = n - 1;

    while (left <= right) {
        let leftSq = nums[left] * nums[left];
        let rightSq = nums[right] * nums[right];

        if (leftSq > rightSq) {
            result[pos] = leftSq;
            left++;
        } else {
            result[pos] = rightSq;
            right--;
        }
        pos--;
    }

    return result;
};



//13  Two Sum 2

var twoSum = function(numbers, target) {
    let ans = new Array(2);
    let start = 0;
    let end = numbers.length - 1;

    while (start < end) {
        let sum = numbers[start] + numbers[end];

        if (sum === target) {
            ans[0] = start + 1; // 1-based index
            ans[1] = end + 1;   // 1-based index
            return ans;
        } else if (sum > target) {
            end--;
        } else {
            start++;
        }
    }
    return ans;
};


//14 Product of array except self

var productExceptSelf = function(nums) {
    let n = nums.length;
    let ans = new Array(n);

    // Step 1: Left products
    let left = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = left;
        left *= nums[i];
    }

    // Step 2: Right products
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= right;
        right *= nums[i];
    }

    return ans;
};



//15 Bulb Switcher
var bulbSwitch = function(n) {
    let count = 0;
    let i = 1;
    
    while(i*i<=n){
        count++;
        i++;
    }
    return count;
};



//16 Largest number atleast twice of other 

var dominantIndex = function(nums) {
    let max = -1, sMax = -1;
    let maxInd = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            sMax = max;
            max = nums[i];
            maxInd = i;
        } else if (nums[i] > sMax) {
            sMax = nums[i];
        }
    }

    if (sMax * 2 <= max) {
        return maxInd;
    } else {
        return -1;
    }
};


