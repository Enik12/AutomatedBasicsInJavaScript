
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

for(let i = 0; i < friendsArray.length; i++){

    console.log(friendsArray[i] + "hello");

};



//4
//Convert numeric array to Boolean

let numbersArray = [1, 3, 32, 145, 1, 56, 54, 7, 9, 10, 20, -5, ];

let newBoolean = Boolean(numbersArray);

console.log(newBoolean);


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

let littleArr = [1, "hello", "cat", 3, true, 1, 34, 432,];

function findIndex(array, number){

    let i = 0; 

    while(i < array.length){
        if(i == number){
            console.log(i);
        }
        i++;
    };

};

findIndex(littleArr, 4);


//8
//Implement a loop that will print the number 'a' until it is less than 10

let a = 0;

while(a < 10){
    console.log(a);
    a++;
};


//9
//Implement a loop that prints prime numbers to the console

//простое число делится только на 1 и на само себя, больше 1

let num = 25

Prime: for(let i = 2; i <= num;  i++){   //label for continue

    for(let j = 2; j < i; j++){

        if (i % j == 0 ) continue Prime;

    };

    console.log(i);
};


//10
//Implement a loop that prints odd numbers to the console


let integerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ];

for(let i = 0; i <= integerArray.length; i++){

    if(i % 2 != 0){
        console.log(i);
    };
};

