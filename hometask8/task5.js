const users = [
     { name: "Olena", email: "olena@gmail.com", age: 30 },
  { name: "Bohdana", email: "bohdana@gmail.com", age: 25 },
  { name: "Ivan",  email: "ivan@gmail.com", age: 40 }
];
for (const {name, email, age} of users) {
    console.log (`${name} has email ${email} and age ${age}`);
}