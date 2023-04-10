import { useState, useEffect } from 'react';
import { BaseUrl } from '../api/api';

//  after getting the JWT  , Sending all data to  the context api
const getUserDataAndSetToContext = async () => {
  const [userData, setUserData] = useState({});
  let token = localStorage.getItem('userToken') || '';

  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const request = await fetch(`${BaseUrl}/user?settings=`, options);
    const response = await request.json();

    if (response.status == 'success') {
      await setUserData(response.data);
    }
  } catch (error) {
    console.log(error.message);
  }

  return userData;
};

export default getUserDataAndSetToContext;
