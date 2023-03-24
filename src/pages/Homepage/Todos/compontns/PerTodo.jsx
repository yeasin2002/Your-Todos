import React from 'react';
import editIcon from '../../../../assests/icons/edit.svg';
import deleteIcon from '../../../../assests/icons/delete.svg';

// assets
import timeIcon from '../../../../assests/icons/timeAndDate.svg';
import contributorImg from '../../../../assests/img/contributorProfilePic.jpg';

const PerTodo = ({ todoBG, todoData }) => {
  const todoBG_color = {
    blue: 'bg-blue-400',
    red: 'bg-red-400',
    green: 'bg-green-400',
  };
  let TodoBgColor = todoBG_color[todoBG];

  const {
    completed,
    createdAt,
    description,
    endingDate,
    owner,
    participants,
    startingDate,
    title,
    _id,
  } = todoData;

  return (
    <div className={TodoBgColor + '  flex rounded-lg group'}>
      <div className="flex-1 px-4 py-2">
        <div className=" flex justify-between">
          <h3>{title}</h3>
          <input type="checkbox" name="completeOrNot" id="completeOrNot" />
        </div>
        <p>{description}</p>
        <div className=" w-full h-1 my-4 bg-blue-200"></div>

        <div className=" flex justify-between">
          <div className=" flex items-center">
            <img src={timeIcon} alt="time" className="w-6 h-6 mx-2" />
            {/* <span>
              {startingDate.slice(0, 10)} - {endingDate.slice(0, 10)}
            </span> */}
          </div>
          <div className="flex mb-5 -space-x-4">
            {participants.map(() => {
              return (
                <img
                  className="contributorProfilePic"
                  src={contributorImg}
                  alt="contributor "
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* delete and edit  */}
      <div className="bg-Shades-100 group-hover:w-1/6 flex flex-col items-center justify-around w-0 transition-all">
        <div className="toTheCenter justify-center w-full h-full">
          <img src={editIcon} alt="edit" className="w-4" />
        </div>
        <div className="toTheCenter justify-center w-full h-full">
          <img src={deleteIcon} alt="delete" className="w-4" />
        </div>
      </div>
    </div>
  );
};
export default PerTodo;
