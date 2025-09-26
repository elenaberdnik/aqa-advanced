
//task2

function whyNum (num) {
    console.log (num); 
if (num <= 0) {
        return;
}

    whyNum(num - 1);  
}
whyNum (5);


