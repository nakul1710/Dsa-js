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



//12.
