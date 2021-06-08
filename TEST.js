/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var number = [];
    for (var i=0; i<nums.length;i++){
        if (nums[i] + nums[i+1] === target)
            {number.push("[" + i + "," + (i+1) + "]");}
    }
    return number;
};


var addTwoNumbers = function(l1, l2) {
    var l1Len = l1.length;
    var l2Len = l2.length;
    
    if (l1Len===l2Len){
        
    }
};