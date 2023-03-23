import { useState, useEffect } from 'react';

const useTask = () => {
  const [taskData, setTaskData] = useState([]);
  const [TaskStatus, setTaskStatus] = useState('');
  let token = localStorage.getItem('userToken');

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token} `,
      },
    };

    fetch('https://baby-todo.onrender.com/tasks', options)
      .then(response => response.json())
      .then(response => {
        if (response.status === 'fail') {
          setTaskStatus('fail');
          setTaskData([]);
        } else {
          setTaskStatus(response.status);
          setTaskData(response.data?.tasks);
        }
      })
      .catch(err => console.error(err));
  }, []);
  return { taskData, TaskStatus };
};

export default useTask;
