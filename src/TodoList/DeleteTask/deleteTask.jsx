export function deleteTask(taskId) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
    method: 'DELETE',
  }).catch((error) => {
    console.log('Request failed', error);
  });
}
