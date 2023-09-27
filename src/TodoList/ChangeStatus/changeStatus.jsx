export function changeStatus(taskId, newStatus) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      completed: newStatus,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
}
