const assertEqual = require("../assertEqual");
const tail = require("../tail");
const words = ["Hello", "how", "is", "everyone?"];
const result = tail(words);


assertEqual(result[0], "how");
assertEqual(result[1], "is");
assertEqual(result[2], "everyone?");