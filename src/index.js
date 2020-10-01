
exports.min = function min (array) {
    if ((array == 0) || ([array]==''))  {
        return 0;
    }
  return Math.min(...array);
}

exports.max = function max (array) {
    if ((array == 0) || ([array]==''))  {
        return 0;
    }
  return Math.max(...array);
}

exports.avg = function avg (array) {
    if ((array == 0) || ([array]==''))  {
        return 0;
    }
    sum = array.reduce((v, i) => (v + i));
 return sum/array.length;
};

