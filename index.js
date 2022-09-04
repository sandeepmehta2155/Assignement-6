"use strict";

const l = console.log;

// Javascript Assignment 6

/* 1) Perform the following operations to provide the implementation for a
 Rectangle class. The operations are:
 1. Add an area() method to the Rectangle class.
 2. Create a Square class that satisfies the following conditions:
 ○ It is a subclass of Rectangle.
 ○ It contains a constructor and no other methods.
 ○ It can use the Rectangle class' area method to print the area
 of a Square object.
 */

// Answer:
// =>

class Rectangle {
  /**
   *
   * @param {*} length
   * @param {*} width
   */
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  /**
   * 
   * @returns area of the rectangle with length & width provided
   */
  area() {
    return `Area of provided rectangle is : ${this.length * this.width}`;
  }
}

class Square extends Rectangle {
  /**
   *
   * @param {*} length
   */
  constructor(length) {
    super(length);
    this.side = length;
  }

  /**
   * 
   * @returns area of the square with side length provided
   */
  area() {
    return `Area of provided square is : ${this.side * this.side}`;
  }
}

const areaOfSquare = new Square(3);

// Output :
l(areaOfSquare.area());

// -------------------------------------------------------------------------------------------------

/*  2) Write a javascript function find_largest to return the nth largest number

 in an array-
 eg- given an array of integers- [3,45,6,7,23,5,7,8]

 find_largest(3) will return third largest number from the above array -
 which is 8.
*/

// Answer:
// =>

const array = [3, 45, 6, 7, 23, 5, 7, 8];

/**
 * 
 * @param {*} index 
 * @returns n th largest element within array
 */
const findNthLargestNum = (index = 0) => {
  const sortedArray = array
    .reduce((acc, val) => {
      if (acc?.indexOf(val) === -1) {
        acc.push(val);
      }
      return acc;
    }, [])
    .sort((a, b) => a - b);

  return sortedArray[index - 1];
};

// Output :
l(findNthLargestNum(3));
l(findNthLargestNum(4));
l(findNthLargestNum(5));

// -------------------------------------------------------------------------------------------------

/* 3) Write a JavaScript program which accept a number as input in the
 function parameter and insert dashes (-) between each two even
 numbers.
 For example if you accept 025468 as the output should be 0-254-6-8.
 computeDash(025468) -> 0-254-6-8.
*/

// Answer:
// =>

/**
 * 
 * @param {*} num 
 * @returns dashed number between even digits
 */
const computeDash = (num) => {
  return `${num}`
    .split("")
    .map((item, index) =>
      item % 2 === 0 && index !== num.length - 1 ? `${item}-` : item
    )
    .join("");
};

// Output :
l(computeDash("02546080"));
