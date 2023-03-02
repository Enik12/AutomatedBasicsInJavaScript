
/*In a try catch construction, wrap the code: console.log (a), let a = 3. 
And display an error - ‘let must be declared’ before use.*/


try{  
    console.log(a);
    let a = 3;
}catch(err){
    console.log("let must be declared before use");
};



//When running 1/0, the error 'cannot be divided by zero'

try{
    let result = 1/0;                      // we don't have error when we try excute 1/0 because in JS 1/0 =Infinity and the code keeps running
    if (result === Infinity){
        throw new SyntaxError("a number divided by zero equals infinity"); // because of that I created my own error for catch block works
    };
}catch(err){
    console.log("cannot be divided by zero");
};