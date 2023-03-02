
//1
let car = {
    color: 'black',   //Create a car object, add a color property to it with the value equals 'black'
};
car.color = 'green';        // Change the color property of the car object to 'green'
car.power = function(){
    console.log('205 horsepower');     //Add the power property to the car object, which is a function and displays the engine power to the console
};
console.log(car.color);
car.power();


//2
function sumFruit(apples, pears){   // write a function that returns the result of adding the number of accepted pears and apples
    return apples + pears;
};
let result = sumFruit(20, 40);
console.log(result);


//3
function showMessage(name){   //write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
    let savedName = 'Jyldyz';

    if(name == savedName){
        console.log("Hello," + name);
    }else{
        console.log("There is no such name");
    };
};
showMessage("Jyldyz");
showMessage("Mark");
showMessage("Thomas");


//4
function typeArgument(argument){    //Write a function for calculating the type of argument and type output to the console
    console.log(typeof argument);
};

typeArgument(true);
typeArgument('Hello!');
typeArgument(543);
typeArgument(4.5);


//5
function isPrime(n){               //Write a function that determines whether a number is prime or not
    for(let i = 2; i < n; i++){
        if (n % i == 0){
            return false;
        };
    };
    return true;
};
console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(9));
console.log(isPrime(11));

