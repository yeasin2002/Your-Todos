import Warning from '../components/Icons/Warning';
import React from 'react';

const ConfirmDelete = ({
  descriptionsMsg = 'This task will be deleted',
  okHandler = () => {
    console.warn("okHandler isn't defined");
  },
  cancelHandler = () => {
    console.warn("cancelHandler isn't defined");
  },
}) => {
  return (
    <div className="bg-slate-300 lg:px-40 absolute top-0 left-0 flex items-center justify-center w-screen h-screen">
      <div className=" lg:py-8 lg:px-14 container px-4 py-4 mx-8 my-3 bg-white rounded-lg">
        <div className=" flex items-center gap-4">
          <Warning />
          <div>
            <h3 className="lg:text-3xl md:text-2xl 2xl:text-4xl 2xl:font-extrabold text-xl font-bold">
              Are you sure?
            </h3>

            <p> {descriptionsMsg} </p>
          </div>
        </div>
        <div className="gap-x-2 flex justify-end my-4">
          <button
            className="bg-ashed px-6 py-2 rounded-lg"
            onClick={cancelHandler}
          >
            cancel
          </button>
          <button
            className="px-6 py-2 text-white bg-red-700 rounded-lg"
            onClick={okHandler}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmDelete;
