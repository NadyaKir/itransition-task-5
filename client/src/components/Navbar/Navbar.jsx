import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import RegionSelect from "./RegionSelect";
import ErrorSliderInput from "./ErrorsSliderInput";
import SeedInputWithButton from "./SeedInputWithButton";

function Navbar(props) {
  const { region, setRegion, errorValue, setErrorValue, seed, setSeed } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleSeedChange = (event) => {
    setSeed(event.target.value);
  };

  const handleShuffleButtonClick = () => {
    const randomSeed = Math.floor(Math.random() * 1000000);
    setSeed(randomSeed);
  };

  const handleInputChange = (event) => {
    setErrorValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  return (
    <nav className="bg-slate-700 p-4 w-full ">
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          <MenuIcon />
        </button>
      </div>
      <div className="hidden md:flex items-center sm:justify-between flex-col md:flex-row">
        <div className="flex grow gap-4 items-center align-middle sm:align-center flex-col md:flex-row w-full">
          <div className="flex flex-col md:flex-row w-full md:w-auto items-center align-middle justify-between">
            <span className="md:mr-2 text-white">Region:</span>
            <RegionSelect
              region={region}
              handleRegionChange={handleRegionChange}
            />
          </div>
          <div className="flex flex-col align-middle items-center md:flex-row justify-between w-full md:w-60">
            <span className="mt-3 md:mt-0 md:mr-4 text-white">Errors:</span>
            <ErrorSliderInput
              value={errorValue}
              onChange={handleInputChange}
              errorValue={errorValue}
              setErrorValue={setErrorValue}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center align-middle justify-between w-full md:w-auto md:ml-2 mt-5 md:mt-0">
            <span className="md:mr-2 text-white">Seed:</span>
            <SeedInputWithButton
              value={seed}
              onChange={handleSeedChange}
              onButtonClick={handleShuffleButtonClick}
            />
          </div>
        </div>
        <div className="flex items-start align-middle mt-5 md:mt-0 w-full md:w-auto">
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded w-full md:w-auto">
            Export
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex md:hidden items-center sm:justify-between flex-col md:flex-row">
          <div className="flex grow items-center align-middle sm:align-center flex-col md:flex-row w-full">
            <div className="flex flex-col md:flex-row w-full md:w-auto items-center align-middle justify-between">
              <span className="md:mr-2 text-white">Region:</span>
              <RegionSelect
                region={region}
                handleRegionChange={handleRegionChange}
              />
            </div>
            <div className="flex flex-col align-middle items-center md:flex-row justify-between md:ml-0 w-full md:w-60">
              <span className="mt-3 md:mt-0 md:mr-2 text-white">Errors:</span>
              <ErrorSliderInput
                value={errorValue}
                onChange={handleInputChange}
                errorValue={errorValue}
                setErrorValue={setErrorValue}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center align-middle justify-between w-full md:w-auto md:ml-2 mt-5 md:mt-0">
              <span className="md:mr-2 text-white">Seed:</span>
              <SeedInputWithButton
                value={seed}
                onChange={handleSeedChange}
                onButtonClick={handleShuffleButtonClick}
              />
            </div>
          </div>

          <div className="flex items-start align-middle mt-5 md:mt-0 w-full md:w-auto">
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded w-full md:w-auto">
              Export
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
