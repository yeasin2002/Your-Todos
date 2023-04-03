import React from 'react';

const Preferences = () => {
  return (
    <div className=" container flex flex-col items-center w-full h-full mx-auto">
      <form className="flex flex-col items-center justify-center w-6/12">
        <h2 className="xl:text-5xl 2xl:text-8xl text-2xl">Collections</h2>
        <div className=" mx-60 flex flex-col py-5  w-full bg-[#d9e8f2] px-28">
          <div className=" flex items-center gap-2">
            <label htmlFor="CollectionsName">Name</label>
            <input type="text" name="CollectionsName" id="CollectionsName" />
          </div>
          <div className=" flex items-center gap-2">
            <label htmlFor="CollectionsRange">Name</label>
            <input type="range" name="CollectionsRange" id="CollectionsRange" />
          </div>
        </div>

        <button type="submit" className="bg-primary w-full px-4 py-2 mt-4">
          Add Category +
        </button>
      </form>
    </div>
  );
};
export default Preferences;
