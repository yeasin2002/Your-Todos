import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import PerTodo from '../../../compontns/PerTodo';

const complete = ({ completeTask }) => {
  return (
    <div className="md:grid-cols-2 xl:grid-cols-3 grid grid-cols-2 gap-2 py-2">
      {completeTask?.map(value => {
        return <PerTodo todoData={value} todoBG={'green'} key={uuid()} />;
      })}
    </div>
  );
};

export default complete;
