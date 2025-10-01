const numbersList = [1,10,14,2,4,5,43,34];
const copiedArray = structuredClone(numbersList);
copiedArray.sort((a, b) => a - b);
console.log("Sorted copy:", copiedArray);
