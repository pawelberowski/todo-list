export function deleteTask(taskId) {
  return fetch(`https://jsonplaceholder.typicode.com/todos?id=${taskId}`, {
    method: 'DELETE',
  }).catch((error) => {
    console.log('Request failed', error);
  });
}
