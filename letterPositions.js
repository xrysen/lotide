const letterPositions = (sentences) => {
  const results = {};
  sentences = sentences.toLowerCase().split("");
  for (let i = 0; i < sentences.length; i++) {
    if (results[sentences[i]]) {
      results[sentences[i]].push(i);
    } else {
      results[sentences[i]] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;