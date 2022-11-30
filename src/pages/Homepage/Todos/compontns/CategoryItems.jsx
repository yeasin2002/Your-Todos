import React from 'react';

const CategoryItems = ({ title }) => {
  return (
    <option value={title}>
      <p>{title}</p>
    </option>
  );
};

export default CategoryItems;
