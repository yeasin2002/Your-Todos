import React, { useState, useEffect } from 'react';

const useTask = () => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem('useTodo');
    console.log(token);
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token} `,
      },
    };

    fetch('https://baby-todo.onrender.com/tasks', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);
  return taskData;
};

export default useTask;
