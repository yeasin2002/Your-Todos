import React from 'react';
import PerTodo from '../../../compontns/PerTodo';

const AllTodo = ({ taskData, TaskStatus }) => {
  /*
  completed:false
createdAt:"2022-12-02T08:04:02.912Z"
description:"Test description"
endingDate:"2022-12-03T00:00:00.000Z"
owner:{_id: '6386fa68377e3c17904c7703', name: 'Md Kawsar Yeasin', username: 'yeasin2002'}
participants:[]
startingDate: "2022-12-02T00:00:00.000Z"
title: "TEST "
_id: "6389b172258078c675489a88"
  */
  return (
    <div>
      {taskData.length === 0 && (
        <p className="md:text-2xl text-slate-800 my-4 text-xl font-bold text-center">
          No task exist
        </p>
      )}
      <div className="md:grid-cols-2 xl:grid-cols-3 grid grid-cols-2 gap-2 py-2">
        {taskData.map((value, index) => {
          console.log(value);
          return <PerTodo todoBG={'blue'} key={index} />;
        })}
      </div>
    </div>
  );
};

export default AllTodo;
