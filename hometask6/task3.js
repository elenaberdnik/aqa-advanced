// task 3
function divide (numerator, denominator) {

    if (denominator === 0) {
    throw new Error ("Error: denominator cannot be 0");
    }

   if (typeof numerator !== "number" || typeof denominator !== "number" ) {
    throw new Error ("Error: Should be numbers");
}
 return numerator / denominator;
}
try {

  let result = divide (10, 5);
  console.log(result);  
} catch (error) {
 
  console.error('The error is occurred:', error.message);
}finally {
   console.log("This message is displayed always")
}
