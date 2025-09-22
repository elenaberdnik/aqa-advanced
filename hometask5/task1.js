//function declaration

function  getAreaDeclaration (width, height) {
    return width * height;
}
console.log ("area of a rectangle is ", getAreaDeclaration(10,5));


// Function Expression
const getAreaExpression = function (width, height) {
return  width * height;
}
console.log ("area of a rectangle is ", getAreaExpression (10,5));

// arrow function
const getAreaArrow = (width, height) => width * height;
console.log ("area of a rectangle is ", getAreaArrow (10,5));