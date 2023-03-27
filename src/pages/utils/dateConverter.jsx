import React from 'react';

const dateConverter = (timestamp = '2022-12-03T00:00:00.000Z') => {
  //   const timestamp = '2022-12-03T00:00:00.000Z';
  const date = new Date(timestamp);

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return formattedTime;
};

export default dateConverter;
