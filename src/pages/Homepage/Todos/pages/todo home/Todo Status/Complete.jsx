import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import PerTodo from '../../../compontns/PerTodo';

const complete = () => {
  return (
    <div className="md:grid-cols-2 xl:grid-cols-3 grid grid-cols-2 gap-2 py-2">
      {[1, 1, 1, 1, 1, 1, 1, 1].map(() => {
        return <PerTodo todoBG={'green'} key={uuid()} />;
      })}
    </div>
  );
};

export default complete;
