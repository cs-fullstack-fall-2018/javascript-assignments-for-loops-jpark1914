//My code is self documenting

function main(){

    FizzBuzz();
}

function FizzBuzz(){
    for (var i = 0; i < 101; i++){
        if(i % 3 === 0 && i % 5 === 0){ // Excellent use of type restricted conditionals!
            console.log("FizzBuzz");
            console.log(i);
        }else if(i % 5 === 0){
            console.log("Buzz");
            console.log(i);
        }else if(i % 3 === 0){
            console.log("Fizz");
            console.log(i);
        }else{
            console.log(i);
        }
    }

}

main();

/*

    KEY: EXCELLENT JOB! 

    Didn't prompt for end value though...
    
    Even included comments! Well done!

*/