// This program finds the largest number in a number array

//My code is self documenting
function main() {

    var myNumberList = [12, 2112, 9000, 1999, 24];
    var largestNumber = -1;

    for (var x = 0; x < myNumberList.length; x++) {
        if (myNumberList[x] > largestNumber) {
            largestNumber = myNumberList[x];
        }


    }       console.log("The largest number is " + largestNumber);
}
main();