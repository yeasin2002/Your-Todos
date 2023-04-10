import { BaseUrl } from '../api/api';

const getUserDataAndSetToContext = async () => {
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
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default getUserDataAndSetToContext;
