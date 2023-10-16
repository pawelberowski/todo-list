export function postNewTask(taskTitle, taskDescription) {
  const newTask = {
    title: taskTitle,
    description: taskDescription,
    isCompleted: false,
  };

  return fetch(`${import.meta.env.VITE_APP_API_URL}/tasks`, {
    method: 'POST',
    body: JSON.stringify(newTask),
    headers: {
      'Content-Type': 'application/json',
    },
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
