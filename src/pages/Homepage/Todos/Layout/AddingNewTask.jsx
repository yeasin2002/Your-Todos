import React, { useState } from 'react';
import InputField from '../../../../components/InputField';
import CrossIcon from '../../.././../assests/icons/cross.svg';

const AddingNewTask = ({ setNewTaskPopUpExist }) => {
  const [TitleValue, setTitleValue] = useState('');

  const removePokUp = () => {
    setNewTaskPopUpExist(false);
  };
  return (
    <div className="top-5 left-10 fixed  w-[80vw] bg-white min-h-[70vh]">
      <div className="bg-sky-250 flex justify-between px-4 py-2">
        <p>Create Task </p>
        <span className=" cursor-pointer" onClick={removePokUp}>
          <img src={CrossIcon} alt="X" className="w-6 h-6" />
        </span>
      </div>

      <form className="md:px-10 px-6 py-2">
        <InputField
          inputType={'text'}
          inputValue={TitleValue}
          inputValueHandler={setTitleValue}
          labelFor={' Task Title '}
          title={'Task Title '}
          IsRequired={true}
        />

        {/* dates  */}
        <div className=" flex justify-between">
          <div>
            <h3>Start </h3>
            <input
              className="border-slate-500 border"
              type="date"
              name="startDate"
              id="startDate"
            />
          </div>

          <div>
            <h3>End </h3>
            <input
              className="border-slate-500 border"
              type="date"
              name="endDate"
              id="endDate"
            />
          </div>
        </div>

        <h3>Descriptions</h3>
        <textarea
          className="border-slate-600 border"
          name="DescriptionsAre"
          id="DescriptionsAre"
          cols="30"
          rows="5"
          placeholder="Descriptions Here "
        ></textarea>

        <div className=" gap-x-4 flex">
          <p>Category</p>

          <select name="choice">
            <option value="first">First Value</option>
            <option value="second">Second Value</option>
            <option value="third">Third Value</option>
          </select>
        </div>

        {/* Participants */}
        <div>
          <p>Participants</p>
          {/*  input and user */}
        </div>

        <button className="bg-primary w-full py-2 my-4 font-bold text-white rounded-lg">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default AddingNewTask;
