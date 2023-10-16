export function deleteTask(taskId) {
  return fetch(`${import.meta.env.VITE_APP_API_URL}/tasks/${taskId}`, {
    method: 'DELETE',
  }).catch((error) => {
    console.log('Request failed', error);
  });
}
