const assertEqual = require("../assertEqual");

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Yo", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), undefined);