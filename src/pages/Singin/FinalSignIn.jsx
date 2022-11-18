import React from 'react';
import { BaseUrl, EndPoints } from '../../api/api';

const FinalSignIn = ({
  Avatar,
  FirstName,
  LastName,
  UserName,
  Password,
  SigInMail,
  OTP,
}) => {
  // const [JWT_Token, setJWT_Token] = useState('');
  const FormHandler = e => {
    e.preventDefault();
    console.log(BaseUrl + EndPoints.signup);
    SentData();
  };

  //  fetch data
  const SentData = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authentication: 'Bearer<jwt-token>',
      },
      body: JSON.stringify({
        email: SigInMail,
        username: UserName,
        name: FirstName + ' ' + LastName,
        avatar: Avatar,
        password: Password,
        code: OTP,
      }),
    };

    fetch(BaseUrl + EndPoints.signup, options)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        console.log(responseData.data.token);
        localStorage.setItem('userToken', responseData.data.token);
      })
      .catch(err => console.error(err));
  };
  // useEffect(() => {
  //  SentData();
  // }, []);

  return (
    <input
      onClick={FormHandler}
      type="button"
      className="bg-primary w-full py-2 my-2 font-bold text-white rounded-lg cursor-pointer"
      value={'Enter '}
    />
  );
};

export default FinalSignIn;
