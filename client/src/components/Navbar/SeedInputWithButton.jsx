import React from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";

const SeedInputWithButton = ({ value, onChange, onButtonClick }) => {
  return (
    <div className="flex w-full md:w-auto">
      <input
        type="text"
        className="w-full md:w-20 bg-gray-700 border border-gray-600 text-white py-2 px-4 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700"
        onChange={onChange}
        value={value}
      />
      <button
        className="ml-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded"
        onClick={onButtonClick}
      >
        <ShuffleIcon />
      </button>
    </div>
  );
};

export default SeedInputWithButton;
