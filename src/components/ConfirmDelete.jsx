import Warning from '../components/Icons/Warning';
import React from 'react';

const ConfirmDelete = ({ setIsNextStep, setGoForDeleteProcess }) => {
  return (
    <div className=" px-4 py-4 mx-3 my-3 bg-white rounded-lg">
      <div className=" flex items-center gap-4">
        <Warning />
        <div>
          <h3 className="lg:text-3xl md:text-2xl 2xl:text-4xl 2xl:font-extrabold text-xl font-bold">
            Are you sure?
          </h3>

          <p>This task will be deleted </p>
        </div>
      </div>
      <div className="gap-x-2 flex justify-end my-4">
        <button className="bg-ashed px-6 py-2 rounded-lg">cancel</button>
        <button className="px-6 py-2 text-white bg-red-700 rounded-lg">
          Ok
        </button>
      </div>
    </div>
  );
};
export default ConfirmDelete;
