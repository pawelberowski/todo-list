export function postNewTask(userId, taskTitle) {
  const newTask = {
    userId: userId,
    title: taskTitle,
    completed: false,
  };

  return fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: newTask,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        return { ...newTask, ...data };
      }
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
}
