/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var result = [];
    for(var h = 0; h < 12; h++) {
        for(var m = 0; m < 60; m++) {
            if(getNumberOf1Bit(h) + getNumberOf1Bit(m) === num) {
                var min = m.toString().length > 1 ? m.toString() : '0' + m;
                result.push('' + h + ':' + min);
            }
        }
    }

    return result;
};

var getNumberOf1Bit = function(n) {
    var result = 0;
    while(n) {
        result += n & 1;
        n = n >>> 1;
    }
    return result;
}

readBinaryWatch(0);