import React from "react";

const RegionSelect = ({ region, handleRegionChange }) => {
  return (
    <select
      className="w-full md:w-auto block appearance-none bg-gray-700 border border-gray-600 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700"
      value={region}
      onChange={handleRegionChange}
    >
      <option>Country 1</option>
      <option>Country 2</option>
      <option>Country 3</option>
    </select>
  );
};

export default RegionSelect;
