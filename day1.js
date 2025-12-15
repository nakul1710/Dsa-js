//1. Two Sum

var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

};



//2. palindrome number => tt = ft+st

function isPalindrome(x) {
    if (x < 0) return false;   

    let revNum = 0;
    let n = x;
    while (n > 0) {
        let d = n % 10;
        revNum = revNum * 10 + d;
        n = Math.floor(n / 10);
    }
    return revNum === x;
}



//3. Nth-tribonacchi Number => ft = ft+st+tt

function tribonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let firstTerm = 0;   
    let secondTerm = 1;  
    let thirdTerm = 1;   

    for (let i = 1; i <= n; i++) {
        let fourthTerm = firstTerm + secondTerm + thirdTerm;
        firstTerm = secondTerm;
        secondTerm = thirdTerm;
        thirdTerm = fourthTerm;
    }
    return firstTerm; 
}


//4. power of two

function isPowerOfTwo(n) {
    if(n<1){
        return false;
    }else if(n == 1){
        return true;
    }
    else{
        while(n%2 == 0){
            n = n/2; 
        }
        if(n==1){
            return true;
        }
        else{
            return false;
        }
    }
};



//5. sqrt() 


var mySqrt = function(x) {
    let i = 0;
    while (i * i <= x) {
        i++;
    }
    return i - 1;
};


//6. plus one


var plusOne = function(digits) {
    let i = digits.length - 1;

    while (i >= 0 && digits[i] === 9) {
        digits[i] = 0;
        i--;
    }

    if (i >= 0) {
        digits[i]++;
    } else {
        digits.unshift(1);
    }

    return digits;
};



//7. water Bottels

function numWaterBottles(numBottles, numExchange) {
    let ans = numBottles;         
    let empties = numBottles;     

    while (empties >= numExchange) {
        const newBottles = Math.floor(empties / numExchange);
        ans += newBottles;                         
        empties = (empties % numExchange) + newBottles; 
    }

    return ans;
}


//8. Remove Element

var removeElement = function(nums, val) {
    let ptr = 0;
    for(let i =0; i<nums.length; i++){
         if(nums[i] != val){
           nums[ptr] = nums[i];
           ptr++;
         }
    }
    return ptr;
};