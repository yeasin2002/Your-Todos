import React from 'react';
import PerTodo from '../../../compontns/PerTodo';

const AllTodo = () => {
  return (
    <div className="md:grid-cols-2 gap-x-2  grid grid-cols-1 m-4">
      <PerTodo />
      <PerTodo />
    </div>
  );
};

export default AllTodo;
