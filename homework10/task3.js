//To Do 
async function getTodoById(id) {
  try {
    const toDoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
if (!toDoResponse.ok) {
      throw new Error('Request failed');
    }

   const data = await toDoResponse.json();
    return data;
   
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}


//User

async function getUserById(id) {
  try {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
 if (!userResponse.ok) {
      throw new Error('Request failed');
    }
     const userData = await userResponse.json();
    return userData; 
    
  } 
  catch (error) {
    console.error("Error:", error);
    throw error;
}
}

const promiseResponses = await Promise.all([getTodoById(1), getUserById(1)]);
console.log(promiseResponses);

const promiseRace = await Promise.race([getTodoById(1), getUserById(1)]);
console.log(promiseRace);


    
        