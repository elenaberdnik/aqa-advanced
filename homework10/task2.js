function getTodoById (id) {
     return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
     .then(response => response.json())
     .catch(error => {
    console.error('Error:', error);
  }); 
        
}
function getUserById (id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(response => response.json())
     .catch(error => {
    console.error('Error:', error);
  }); 
}

const promisesCollection = Promise.all([getTodoById (1), getUserById (1)]); 
promisesCollection
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  const promiseRace = Promise.race ([getTodoById (1), getUserById (1)]); 
    promiseRace 
    .then (response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Error:', error);
  }); 