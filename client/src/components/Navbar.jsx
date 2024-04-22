import { useState } from "react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";

const countries = ["Country 1", "Country 2", "Country 3"];

function Navbar() {
  const [country, setCountry] = useState("");
  const [errorValue, setErrorValue] = useState(0);
  const [seed, setSeed] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSliderChange = (event, newValue) => {
    setErrorValue(newValue);
  };

  const handleInputChange = (event) => {
    setErrorValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (errorValue < 0) {
      setErrorValue(0);
    } else if (errorValue > 10) {
      setErrorValue(10);
    }
  };

  const Input = styled(MuiInput)`
    color: white;
    margin-left: 1rem;
  `;

  return (
    <nav class="bg-slate-700 p-4 w-full ">
      <div class="block md:hidden">
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
            <span class="md:mr-2 text-white">Region:</span>
            <select class="w-full md:w-auto block appearance-none bg-gray-700 border border-gray-600 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700">
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
            </select>
          </div>
          <div class="flex flex-col align-middle items-center md:flex-row justify-between md:ml-2 w-full md:w-60">
            <span class="mt-3 md:mt-0 md:mr-2 md text-white">Errors:</span>
            <div className="flex w-full md:w-auto justify-between flex-col md:flex-row md:ml-1">
              <Slider
                value={typeof errorValue === "number" ? errorValue : 0}
                onChange={handleSliderChange}
                min={1}
                max={10}
                step={0.25}
                aria-labelledby="input-slider"
              />
              <Grid item>
                <Input
                  value={errorValue}
                  size="small"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  inputProps={{
                    step: 1,
                    min: 0,
                    max: 10,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </Grid>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center align-middle justify-between w-full md:w-auto md:ml-2 mt-5 md:mt-0">
            <span class="md:mr-2 text-white">Seed:</span>
            <div className="flex w-full md:w-auto">
              <input
                type="text"
                class="w-full md:w-20 bg-gray-700 border border-gray-600 text-white py-2 px-4 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700"
              />
              <button class="ml-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded">
                <ShuffleIcon />
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-start align-middle mt-5 md:mt-0 w-full md:w-auto">
          <button class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded w-full md:w-auto">
            Export
          </button>
        </div>
      </div>
      {isOpen && (
        <div class="flex items-center sm:justify-between flex-col md:flex-row">
          <div className="flex grow items-center align-middle sm:align-center flex-col md:flex-row w-full">
            <div className="flex flex-col md:flex-row w-full md:w-auto items-center align-middle justify-between">
              <span class="md:mr-2 text-white">Region:</span>
              <select class="w-full md:w-auto block appearance-none bg-gray-700 border border-gray-600 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700">
                <option>Country 1</option>
                <option>Country 2</option>
                <option>Country 3</option>
              </select>
            </div>
            <div class="flex flex-col align-middle items-center md:flex-row justify-between ml-2 md:ml-0 w-full md:w-60">
              <span class="mt-3 md:mt-0 md:mr-2 text-white">Errors:</span>
              <div className="flex w-full md:w-auto justify-between flex-col md:flex-row">
                <Slider
                  value={typeof errorValue === "number" ? errorValue : 0}
                  onChange={handleSliderChange}
                  min={1}
                  max={10}
                  step={0.25}
                  aria-labelledby="input-slider"
                />
                <Grid item>
                  <Input
                    value={errorValue}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 10,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </Grid>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center align-middle justify-between w-full md:w-auto md:ml-2 mt-5 md:mt-0">
              <span class="md:mr-2 text-white">Seed:</span>
              <div className="flex w-full md:w-auto">
                <input
                  type="text"
                  class="w-full md:w-20 bg-gray-700 border border-gray-600 text-white py-2 px-4 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700"
                />
                <button class="ml-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded">
                  <ShuffleIcon />
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-start align-middle mt-5 md:mt-0 w-full md:w-auto">
            <button class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded w-full md:w-auto">
              Export
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
