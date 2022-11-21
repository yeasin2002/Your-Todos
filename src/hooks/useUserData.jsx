import { useState, useEffect } from 'react';

const useUserData = () => {
  const [UserData, setUserData] = useState({});
  const [IsError, setIsError] = useState(false);
  let localToken = localStorage.getItem('userToken');

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    };
    fetch('https://baby-todo.onrender.com/user?settings=', options)
      .then(response => response.json())
      .then(response => setUserData(response))
      .catch(err => {
        setIsError(true);
        console.error(err);
      });
  }, []);

  return { UserData, IsError };
};

export default useUserData;
