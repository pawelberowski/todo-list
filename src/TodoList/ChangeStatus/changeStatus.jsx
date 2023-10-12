export function changeStatus(taskId, newStatus) {
  return fetch(`${import.meta.env.VITE_APP_API_URL}/tasks/${taskId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      isCompleted: newStatus,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
}
