
const tail = function(arr) {
  let output = [];
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      output.push(arr[i]);
    }
  }
  return output;
};



module.exports = tail;