//My code is self documenting
//No but seriously I really need YOU to explain what I did here with this "indexOf" mess.
//Nevermind I looked it up
//indexOf() returns the position of the first occurrence of a specified value
//in a string. The method returns -1 if the value to search for never occurs.
//Sooooooooooo if the indexOf "arr" is going to be equaling -1 because it's a duplicate if will
// ".push" the duplicate number out of the array and print to the new array.
//A very horrible explanation but i feel i was close.

var arr = [1,2,-2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
function main(){

console.log(itsSuper(arr));
}

function itsSuper(){

    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) ===-1){
             newArr.push(arr[i]);
        }
    }return newArr


}
main();