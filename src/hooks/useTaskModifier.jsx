import  { useState, useEffect } from 'react';
import { BaseUrl } from '../api/api';

const useTaskModifier = bodyData => {
  const [taskData, setTaskData] = useState([]);
  const [TaskStatus, setTaskStatus] = useState('');
  let token = localStorage.getItem('userToken');
 console.log(bodyData)

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token} `,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title: 'TEST ',
        description: 'Test description',
        startingDate: '2022-12-02',
        endingDate: '2022-12-03',
        participants: [],
      }),
    };

    fetch(BaseUrl + '/tasks', options)
      .then(data => data.json())
      .then(response => {
        console.log(response);
        // setTaskStatus(response.status);
        // setTaskData(response.data.tasks);
      })
      .catch(err => console.error(err));
  }, []);
  return;
  //  { taskData, TaskStatus };
};

export default useTaskModifier;
