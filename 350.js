/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(nums1.length === 0 || nums2.length === 0) {
        return [];
    }
    var nums1 = nums1.sort(function(a, b) {
        return a - b;
    });
    var nums2 = nums2.sort(function(a, b) {
        return a - b;
    });
    console.log(nums1);
    console.log(nums2);

    var pointer1 = 0;
    var pointer2 = 0;

    var result = [];

    while(!(pointer1 === nums1.length && pointer2 === nums2.length)) {
        if(nums1[pointer1] === nums2[pointer2]) {
            result.push(nums2[pointer2]);
            if(pointer1 === nums1.length - 1 || pointer2 === nums2.length - 1) {
                return result;
            }
            pointer1++;
            pointer2++;
        }else if(nums1[pointer1] > nums2[pointer2]) {
            if(pointer2 === nums2.length - 1) {
                return result;
            }else {
                pointer2++;
            }
        }else if(nums1[pointer1] < nums2[pointer2]) {
            if(pointer1 === nums1.length - 1) {
                return result;
            }else {
                pointer1++;
            }
        }
    }

    return result;
};

var a = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81];
var b = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48];

console.log(intersect(a, b));