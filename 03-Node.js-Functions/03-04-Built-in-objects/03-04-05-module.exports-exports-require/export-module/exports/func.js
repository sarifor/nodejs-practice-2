const sum = (x, y) => x + y;
const square = x => x * x;

exports.mean = data => data.reduce(sum)/data.length; // arr.reduce()
exports.stddev = function(d) {
  return square(d);
}