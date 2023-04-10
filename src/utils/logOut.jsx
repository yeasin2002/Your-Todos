import { useNavigate } from 'react-router-dom';

const logOut = () => {
  let navigate = useNavigate();

  localStorage.removeItem('userToken');
  navigate('/');
};

export default logOut;
