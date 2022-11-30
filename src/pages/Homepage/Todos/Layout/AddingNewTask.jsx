import React, { useState } from 'react';
import { motion } from 'framer-motion';

import CrossIcon from '../../.././../assests/icons/cross.svg';
import TikIcon from '../../.././../assests/icons/check.svg';

import CategoryItems from '../compontns/CategoryItems';
import PerParticipants from '../compontns/PerParticipants';

const AddingNewTask = ({ setNewTaskPopUpExist }) => {
  const [TitleValue, setTitleValue] = useState('');

  const removePokUp = () => {
    setNewTaskPopUpExist(false);
  };

  let selectTag = `bg-[#D9E1F2]  outline-1 outline-primary text-primary rounded-md  placeholder:px-4 placeholder:text-[#3960AC]/40`;
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className=" max-h-[90%] overflow-y-scroll  top-0 left-10 fixed  w-[80vw] bg-white min-h-[70vh] border border-slate-800/30 rounded-md"
    >
      <div className="bg-sky-250 flex justify-between px-4 py-2">
        <p>Create Task </p>
        <span className=" cursor-pointer" onClick={removePokUp}>
          <img src={CrossIcon} alt="X" className="w-6 h-6" />
        </span>
      </div>

      <form className="px-4 py-4">
        <label htmlFor="title">
          <p className=" taskTitle">Task Title</p>
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          className={`w-full bg-[#D9E1F2] py-2 outline-1 outline-primary text-primary rounded-md my-2 placeholder:px-4 placeholder:text-[#3960AC]/40 `}
        />

        {/* date */}
        <div className=" md:flex-row md:justify-between md:my-2 flex flex-col justify-start my-4">
          <div id="start date">
            <label htmlFor="StartDate">
              <p className=" taskTitle">Start Date</p>
              <input type="date" name="StartDate" id="StartDate" />
            </label>
          </div>

          <div id="end date">
            <label htmlFor="EndDate">
              <p className=" taskTitle">End Date</p>
              <input type="date" name="EndDate" id="EndDate" />
            </label>
          </div>
        </div>
        {/*  date end  */}

        <div>
          <label htmlFor="descriptions">
            <p className=" taskTitle">descriptions</p>
            <textarea
              name="descriptions"
              id="descriptions"
              cols="30"
              rows="5"
              placeholder="descriptions here..."
              className="w-full bg-[#D9E1F2]  outline-1 outline-primary text-primary rounded-md  placeholder:px-4 placeholder:text-[#3960AC]/40"
            ></textarea>
          </label>
        </div>
        {/* Category */}
        <div className="toTheCenter">
          <p className=" taskTitle">Category</p>

          {/* select tag  */}
          <label htmlFor="Category">
            <div className={selectTag}>
              <select
                name="Category"
                id="Category"
                className={selectTag + 'p-2'}
              >
                <CategoryItems title="work" />
                <CategoryItems title="personal" />
                <CategoryItems title="Urgent" />
              </select>
            </div>
          </label>
        </div>

        {/* Participants */}
        <div className="group">
          <div className="toTheCenter ">
            <p className="taskTitle">Participants</p>
            <span>
              <img
                src={CrossIcon}
                alt="+"
                className=" group-hover:rotate-0 w-4 transition-all rotate-45"
              />
            </span>
          </div>

          <div>
            <div className=" bg-sky-250 w-full px-2 py-4 my-2">
              <label htmlFor="addParticipants" className="toTheCenter">
                <input
                  type="text"
                  name="addParticipants"
                  id="addParticipants"
                  placeholder="add Participants "
                  className="bg-sky-250 md:w-4/5 w-[30%] border-none outline-none"
                />
                <span className="toTheCenter gap-x-2 ">
                  <select name="role" className=" bg-gray-100">
                    <option value="admin">admin </option>
                    <option value="moderator">moderator</option>
                    <option value="assigner">assigner</option>
                  </select>
                  <img src={TikIcon} alt="done" className=" w-5" />
                </span>
              </label>
            </div>
            <PerParticipants />
          </div>
        </div>

        {/* btn */}
        <button className="bg-primary text-md w-full px-1 py-2 font-bold text-white rounded-lg">
          Create Task
        </button>
      </form>
    </motion.div>
  );
};

export default AddingNewTask;
