
//Perform addition of various types (string + boolean, string + number, number + boolean)

let str = "Hello";
let bool = true;
let result1 = str + bool;
console.log("string + boolean = ", result1);


let str1 = 'World';
let int = 100;
let result2 = str1 + int;
console.log("string + number = ", result2);


let bl = true;
let bl1 = false;
let result3 = int + bl;
console.log("number + booleanTrue = ", result3);                                
let result4 = int + bl1;       
console.log("number + booleanFalse = ", result4);  //I use both types of boolean because they give different results


//Perform multiplication of various types (string * boolean, string * number, number * boolean)

let first = "birds";
let second = true;
let result5 = first * second;
console.log("string * boolean = ", result5);


let a = "Chicago";
let b = 66;
let result6 = a * b;
console.log("string * number = ", result6);


let number = 45;
let boolean = true;
let boolean2 = false;
let result7 = number * boolean;
console.log("number * booleanTrue = ", result7);
console.log("number * booleanFalse = ", number * boolean2);


//Divide different types (string / boolean, string / number, number / Boolean)

let x = "yort";
let y = false;
let z = x / y;
console.log("string / boolean = ", z);


let c = 'qwerty';
let d = 312;
let resultDivide = c / d;
console.log("string / number = ", resultDivide);


let e = 2;
let f = true;
let g = false
console.log("number / BooleanT = ", e / f);
console.log("number / BooleanF = ", e / g);


//Perform explicit conversion (number, string, boolean)


let integer = 101;
let integerToBoolean = Boolean(integer);
console.log(typeof(integerToBoolean));


let string1 = "str";
let stringToNumber = Number(string1);
console.log(typeof(stringToNumber));

let boolean1 = false;
let booleanToString = String(boolean1);
console.log(typeof(booleanToString));

