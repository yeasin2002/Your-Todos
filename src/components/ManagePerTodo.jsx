import editIcon from '../assests/icons/edit.svg';
import deleteIcon from '../assests/icons/delete.svg';
import { BaseUrl, DeleteTask } from '../api/api';

export const ManagePerTodo = ({ id }) => {
  //  delete task handler
  const deleteHandler = async () => {
    console.log(BaseUrl + DeleteTask(id));
    let uerToken = localStorage.getItem('userToken');

    try {
      let req = await fetch(BaseUrl + DeleteTask(id), {
        headers: {
          'Content-Type': 'application/json',
          Authentication: 'Bearer' + uerToken,
        },
      });
      let res = await req.json();

      console.log(res);
    } catch (error) {
      console.error(error);
      console.log(error.message);
    }
  };
  return (
    <div className="bg-Shades-100 group-hover:w-1/6 flex flex-col items-center justify-around w-0 transition-all">
      <div className="toTheCenter justify-center w-full h-full">
        <img src={editIcon} alt="edit" className="w-4" />
      </div>
      <div className="toTheCenter justify-center w-full h-full">
        <span className="hover:bg-slate-300 p-4 transition-all rounded-full">
          <img
            onClick={deleteHandler}
            src={deleteIcon}
            alt="delete"
            className=" w-4"
          />
        </span>
      </div>
    </div>
  );
};
