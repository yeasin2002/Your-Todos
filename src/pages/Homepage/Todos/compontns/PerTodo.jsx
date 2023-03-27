import React from 'react';

// assets
import timeIcon from '../../../../assests/icons/timeAndDate.svg';
import contributorImg from '../../../../assests/img/contributorProfilePic.jpg';
import dateConverter from '../../../utils/dateConverter';
import { ManagePerTodo } from '../../../../components/ManagePerTodo';

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
    owner,
    participants,
    startingDate,
    endingDate,
    title,
    _id,
  } = todoData;

  let dateWhileStart = dateConverter(startingDate);
  let dateWhileEnd = dateConverter(endingDate);

  return (
    <div className={TodoBgColor + '  flex rounded-lg group'}>
      <div className="flex-1 px-4 py-2">
        <div className=" flex justify-between">
          <div className=" flex w-full gap-2">
            <h3 className="text-secondary text-xl">{title}</h3>
            <p className="bg-primary px-2 text-white rounded-md">
              Task Category
            </p>
          </div>

          <input type="checkbox" name="completeOrNot" id="completeOrNot" />
        </div>
        <p>{description}</p>
        <div className=" w-full h-1 my-4 bg-blue-200"></div>

        <div className=" flex justify-between">
          <div className=" flex items-center">
            <img src={timeIcon} alt="time" className="w-6 h-6 mx-2" />
            <span>
              {dateWhileStart} - {dateWhileEnd}{' '}
            </span>
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
      <ManagePerTodo id={_id} />
    </div>
  );
};
export default PerTodo;
