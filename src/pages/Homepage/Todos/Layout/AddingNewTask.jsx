import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useTaskModifier from '../../../../hooks/useTaskModifier';

import CrossIcon from '../../.././../assests/icons/cross.svg';
import TikIcon from '../../.././../assests/icons/check.svg';

import CategoryItems from '../compontns/CategoryItems';
import PerParticipants from '../compontns/PerParticipants';

const AddingNewTask = ({ setNewTaskPopUpExist }) => {
  const [TitleValue, setTitleValue] = useState('');
  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');
  const [DescriptionsState, setDescriptionsState] = useState('');
  const [CategoryState, setCategoryState] = useState('');
  const [ParticipantsState, setParticipantsState] = useState('');

  const newTaskModifier = useTaskModifier();

  const removePokUp = () => {
    setNewTaskPopUpExist(false);
  };
  const FormDataHandler = (e, { type }) => {
    switch (type) {
      case 'title':
        setTitleValue(e.target.value);
        break;

      case 'startData':
        setStartDate(e.target.value);
        break;

      case 'EndDate':
        setEndDate(e.target.value);
        break;

      case 'descriptions':
        setDescriptionsState(e.target.value);
        break;

      case 'Category':
        setCategoryState(e.target.value);
        break;

      case 'Participants':
        setParticipantsState(e.target.value);
        break;

      default:
        console.log('something went wrong ');
        console.log(type);
        console.log(e);
        break;
    }
  };
  const createNewTask = e => {
    e.preventDefault();

    if (
      !TitleValue ||
      !StartDate ||
      !EndDate ||
      !DescriptionsState ||
      !CategoryState ||
      !ParticipantsState
    )
      return;

    //  post new task

    // useTaskModifier({
    //   TitleValue,
    //   StartDate,
    //   EndDate,
    //   DescriptionsState,
    //   CategoryState,
    //   ParticipantsState: [],
    // })
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
        <p className="text-slate-700 text-xl font-bold">Create Task </p>
        <span
          className=" hover:bg-sky-200 p-2 transition-all rounded-full cursor-pointer"
          onClick={removePokUp}
        >
          <img src={CrossIcon} alt="X" className="w-6 h-6" />
        </span>
      </div>

      <form className="px-4 py-4" onSubmit={createNewTask}>
        <label htmlFor="title">
          <p className=" taskTitle">Task Title</p>
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          className={`w-full bg-[#D9E1F2] py-2 outline-1 outline-primary text-primary rounded-md my-2 placeholder:px-4 placeholder:text-[#3960AC]/40 `}
          value={TitleValue}
          onChange={e => {
            FormDataHandler(e, { type: 'title' });
          }}
        />

        {/* date */}
        <div className=" sm:flex-row sm:justify-between sm:my-2 flex flex-col justify-start my-4">
          <div id="start date">
            <label htmlFor="StartDate">
              <p className=" taskTitle">Start Date</p>
              <input
                type="date"
                name="StartDate"
                id="StartDate"
                value={StartDate}
                onChange={e => {
                  FormDataHandler(e, { type: 'startData' });
                }}
              />
            </label>
          </div>

          <div id="end date">
            <label htmlFor="EndDate">
              <p className=" taskTitle">End Date</p>
              <input
                type="date"
                name="EndDate"
                id="EndDate"
                value={EndDate}
                onChange={e => {
                  FormDataHandler(e, { type: 'EndDate' });
                }}
              />
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
              value={DescriptionsState}
              onChange={e => {
                FormDataHandler(e, { type: 'descriptions' });
              }}
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
                onChange={e => {
                  FormDataHandler(e, { type: 'Category' });
                }}
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
                  <select
                    name="role"
                    className=" bg-gray-100"
                    onChange={e => {
                      FormDataHandler(e, { type: 'Participants' });
                    }}
                  >
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
        <button
          onClick={createNewTask}
          className="bg-primary text-md w-full px-1 py-2 font-bold text-white rounded-lg"
        >
          Create Task
        </button>
      </form>
    </motion.div>
  );
};
export default AddingNewTask;
