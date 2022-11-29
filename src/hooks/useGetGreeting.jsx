import { useEffect, useState } from 'react';

const useGetGreeting = () => {
  const [Greeting, setGreeting] = useState('');
  /*
 Good morning : 5:00AM -  12 PM
 Good afternoon : 12:01PM -6: 00PM
 Good evening : 6:01 - 4:59AM
 */

  let today = new Date();
  let time = today.getHours(); // 21 / 9
  //   let date =  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  useEffect(() => {
    if (time > 0 && time < 5) {
      setGreeting(' Good Night  ');
    } else if (time => 5 && time < 12) {
      setGreeting(' Good  Morning ');
    } else if (time => 12 && time < 18) {
      setGreeting(' Good  afternoon ');
    } else if (time => 18 && time < 24) {
      setGreeting(' Good  evening ');
    }
  }, []);
  return Greeting;
};

export default useGetGreeting;
