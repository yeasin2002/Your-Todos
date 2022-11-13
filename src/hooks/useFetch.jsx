import { useEffect } from 'react';

const useFetch = () => {
  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authentication: 'Bearer<jwt-token>',
      },
      body: JSON.stringify({ email: 'mdkawsarislam2002@gmail.com' }),
    };
    let BaseURL = ` https://young-coders-todo-app.herokuapp.com/v1/`;

    fetch(`${BaseURL}account/request-email-verify`, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []);
};

export default useFetch;
