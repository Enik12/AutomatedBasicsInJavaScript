
//1
/*Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression 
that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'*/

let string = "ahb acb aeb aeeb adcb axeb";

let regexp = /a\wb/g;                  

let result = string.match(regexp);

console.log(result);


//2
//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let string2 = "2+3 223 2223";

let regexp2 = /2.3/;

let result2 = string2.match(regexp2);

console.log(result2);  //returns the first match as an array with brackets and options

console.log(result2[0]);   //return only 2+3



//3
//Get the day, month and year of the current date and output it to the console separately

let dateNow = new Date();

let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(dateNow.getDate());
console.log(monthArray[dateNow.getMonth()]);  // I added array because getMonth method returns number of months, which start from 0, for example march = 2
console.log(dateNow.getFullYear());

