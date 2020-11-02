const middle = (arr) => {
  let mid = 0;
  let output = [];
  if(!(arr.length > 2)) {
    output = [];
  } else if(arr.length % 2 === 0) {
    mid = (arr.length / 2) - 1;
    output.push(arr[mid], arr[mid + 1]);
  } else {
    mid = Math.floor(arr.length / 2);
    output.push(arr[mid]);
  }
  return output;
};

module.exports = middle;



