
// task 1

function handleEven () {
console.log ("The number is even");
}

function handleOdd () {
console.log ("The number is odd");
}

function handleNum (number, numEven, numOdd ) {
    if (number % 2 === 0) {
        return numEven ();
    }
return numOdd ();
}

handleNum (3, handleEven, handleOdd);




