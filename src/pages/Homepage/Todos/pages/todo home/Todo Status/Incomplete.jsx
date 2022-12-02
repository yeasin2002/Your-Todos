import React from 'react';
import PerTodo from '../../../compontns/PerTodo';

const Incomplete = ({ IncompleteTasks }) => {
  return (
    <div className="md:grid-cols-2 xl:grid-cols-3 grid grid-cols-2 gap-2 py-2">
      {IncompleteTasks?.map(value => {
        return <PerTodo todoData={value} todoBG={'red'} />;
      })}
    </div>
  );
};

export default Incomplete;
