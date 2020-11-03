const flatten = (input) => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      for (let j = 0; j < input[i].length; j++) {
        output.push(input[i][j]);
      }
    } else {
      output.push(input[i]);
    }
  }
  return output;
};

module.exports = flatten;

