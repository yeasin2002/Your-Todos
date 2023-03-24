import { useState, useEffect } from 'react';

const useUserData = () => {
  const [UserData, setUserData] = useState({});
  const [IsError, setIsError] = useState(false);
  let localToken = localStorage.getItem('userToken');

  const dataFetching = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    };

    const request = await fetch(
      'https://baby-todo.onrender.com/user?settings=',
      options
    );
    const response = await request.json();
    setUserData(response);

    // .then(response => response.json())
    // .then(response => setUserData(response))
    // .catch(err => {
    //   setIsError(true);
    //   console.error(err);
    // });
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return { UserData, IsError };
};

export default useUserData;
