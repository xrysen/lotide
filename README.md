# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @seanoyler/lotide`

**Require it:**

`const _ = require('@seanoyler/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `assertArraysEqual(arr1, arr2)`: Test to see if two arrays are equal. Reports Success if they are Fail if they are not 
* `assertEqual(arr1, arr2)`: Test to see if two values are strictly equal.
* `assertObjectsEquals(obj1, obj2)`: Test to see if two objects passed in are equal.
* `countLetters(str)`: Takes a string and returns an object with the counts of each letter
* `countOnly(allItems, itemsToCount)`: Takes a list of items and returns an object with counts of items specifically passed in as itemsToCount
* `eqArrays(arr1, arr2)`: Takes two arrays and compares them together to see if they are equal
* `eqObjects(obj1, obj2)`: Takes two objects and compares them together to see if they are equal
* `findKeys(obj, callback)`: Takes an object and call back function to return the key(s) where the result of the callback are true
* `findKeyByValue(obj, value)`:  Takes an object, searches for a key containing the value passed and returns the key
* `flatten(arr)`: Takes a multi-dimensional array, concats all arrays together to form one array. Returns the new array.
* `head(arr)`: Returns the first element of an array
* `letterPositions(str)`: Takes a string and returns an object where each key is a letter that appears in the string. Their respective values are an array of the positions at which those letters appear
* `map(array, callback)`: Takes an array and performs the callback function on each element, creating and returning a new array
* `middle(array)`: Takes an array and returns the middle element
* `tail(array)`: Takes an array and returns all elements except the first
* `takeUntil(array, callback)`: Takes an array and a callback, pushing the elements of the original array into a new array until the conditions of the callback are reached.
* `without(array, itemToRemove)`: Returns a new array with all the elements of the array passed in except for those defined in the itemsToRemove parameter