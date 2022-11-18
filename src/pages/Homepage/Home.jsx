import React, { useEffect } from 'react';
import HomeImg from '../../assests/icons/home.svg';

const Home = () => {
  useEffect(() => {
    let userData = localStorage.getItem('userToken');

    // FetchUserData(userData);
  }, []);

  const FetchUserData = userData => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userData}`,
      },
    };

    fetch('https://baby-todo.onrender.com/user?settings=', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };

  return (
    <div className="w-screen h-screen">
      <nav className=" bg-[#D9E1F2] fixed bottom-0 left-0 flex w-full justify-between py-6">
        <div className="homeNavItems">
          <span>
            <img src={HomeImg} alt="home" />
          </span>
          <p>Home</p>
        </div>

        <div className="homeNavItems">
          <span>
            <img src={HomeImg} alt="home" />
          </span>
          <p>Home</p>
        </div>

        <div className="homeNavItems">
          <span>
            <img src={HomeImg} alt="home" />
          </span>
          <p>Home</p>
        </div>

        <div className="homeNavItems">
          <span>
            <img src={HomeImg} alt="home" />
          </span>
          <p>Home</p>
        </div>
      </nav>
    </div>
  );
};

export default Home;
