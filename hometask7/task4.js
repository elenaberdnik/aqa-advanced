const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberEven = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const all = numbers4.concat(numberEven);
const evens = all.filter ((num => num % 2 === 0));

console.log(evens);

