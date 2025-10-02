const car1 = {
brand: "BMW",
model: "X5",
year: 2024
};

const car2 = {
brand: "TOYOTA",
model: "Corolla",
owner: "Olena Berdnyk"
};

const car3 = {...car1, ...car2}
console.log(car3);