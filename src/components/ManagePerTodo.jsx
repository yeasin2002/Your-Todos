import editIcon from '../assests/icons/edit.svg';
import deleteIcon from '../assests/icons/delete.svg';
import { BaseUrl, DeleteTask } from '../api/api';
import { useState } from 'react';

export const ManagePerTodo = ({ id }) => {
  const [LoadingDelete, setLoadingDelete] = useState(false);
  const [IsError, setIsError] = useState(false);
  //  delete task handler

  const deleteHandler = async () => {
    setLoadingDelete(true);
    console.log(BaseUrl + DeleteTask(id));
    let uerToken = localStorage.getItem('userToken');

    try {
      let req = await fetch(BaseUrl + DeleteTask(id), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + uerToken,
        },
      });
      if (req.ok) {
        console.log('deleted');
      }
      setLoadingDelete(false);
    } catch (error) {
      console.error(error);
      console.log(error.message);
      setIsError(true);
    }
  };
  //  delete  toto  and fetch data
  return (
    <div className="bg-Shades-100 group-hover:w-1/6 flex flex-col items-center justify-around w-0 transition-all">
      <div className="toTheCenter justify-center w-full h-full">
        <img src={editIcon} alt="edit" className="w-4" />
      </div>
      <div className="toTheCenter justify-center w-full h-full">
        {LoadingDelete && <h5> Deleting ..... </h5>}
        <span
          onClick={deleteHandler}
          className="hover:bg-slate-300 p-4 transition-all rounded-full"
        >
          {!LoadingDelete && (
            <img src={deleteIcon} alt="delete" className=" w-4" />
          )}
        </span>
      </div>
    </div>
  );
};
