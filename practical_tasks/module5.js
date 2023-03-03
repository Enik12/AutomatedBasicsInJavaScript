
//1
//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console


let filmsArray = ["Matilda", "Peaky Blinders", "Game of Thrones", "Crown", "The Lake House", "Pretty Woman",];

for(let i = 0; i < filmsArray.length; i++){

    console.log(filmsArray[i]);

};



//2
//Given an array of car manufacturers, convert the array to a string and back to an array

let carsArray = ["Mersedes Benz", "Kia", "Toyota", "Audi", "Bmw", "Hyundai", ];

let carsString = carsArray.join(',');

console.log(carsString);

let stringArray = carsString.split(',');

console.log(stringArray);



//3
//Given an array of the names of your friends, add the words hello to each element of the array


let friendsArray = ["Elena", "Almaz", "Aijamal", "Maksim", "Olga", ];

const word = "hello";

friendsArray.forEach((element, index) => {

    friendsArray[index] = word + " " + element;

});

console.log(friendsArray);



//4
//Convert numeric array to Boolean

const numbersArray = [1, 3, 32, 145, 1, 56, 54, 7, 9, 10, 20, -5, ];

let boolArray = [];

for(let i = 0; i <= numbersArray.length; i++){

    boolArray.push(Boolean(numbersArray[i]));

}

console.log(boolArray);


//5
//Sort the array [1,6,7,8,3,4,5,6] in descending order

let Arr = [1, 6, 7, 8, 3, 4, 5, 6, ];

Arr.reverse();

console.log(Arr);


//6
//Filter array [1,6,7,8,3,4,5,6] by value> 3

let arr = [1, 6, 7, 8, 3, 4, 5, 6,];

let newArr = arr.filter(item => item > 3);

console.log(newArr);


//7
//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

function getIndex(arr, n){
    
    let index = arr.findIndex(item => item == n);

    if(index == -1){                                  //if findIndex method doesn't find element equal to condition it will return -1
        console.log("Array doesn't have this number");
    }else{
        console.log("Index of number " + n + " is: " + index);
    };
    
};

getIndex(myArr , 10);


//8
//Implement a loop that will print the number 'a' until it is less than 10

let a = 0;

while(a < 10){
    console.log(a);
    a++;
};


//9
//Implement a loop that prints prime numbers to the console

function findPrimeNumber(n){

    for(let i = 2; i < n; i++){

        if (i != 2 && i % 2 == 0) continue;     //I excluded numbers that are divisible by 2, 3, 5 and 7 without a remainder
        if (i != 3 && i % 3 == 0) continue;     //but I leaved 2 because it is a prime number
        if (i != 5 && i % 5 == 0) continue;     //also I leaved numbers: 3, 5 and 7
        if (i != 7 && i % 7 == 0) continue;     //I'm not sure that this is a right way to find prime numbers but the code works

        console.log(i);
    };
    

};

findPrimeNumber(100);



//10
//Implement a loop that prints odd numbers to the console


let integerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ];

for(let i = 0; i <= integerArray.length; i++){

    if(i % 2 != 0){
        console.log(i);
    };
};

