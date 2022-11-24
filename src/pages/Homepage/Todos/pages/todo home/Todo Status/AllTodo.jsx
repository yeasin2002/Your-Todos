import React from 'react';
import PerTodo from '../../../compontns/PerTodo';
import useTask from '../../../../../../hooks/useTask';

const AllTodo = () => {
  let useAllTask = useTask();
  console.log(useAllTask);
  return (
    <div className="md:grid-cols-2 xl:grid-cols-3 grid grid-cols-2 gap-2 py-2">
      {[1, 1, 1, 1].map(() => {
        return <PerTodo todoBG={'blue'} />;
      })}
    </div>
  );
};

export default AllTodo;
