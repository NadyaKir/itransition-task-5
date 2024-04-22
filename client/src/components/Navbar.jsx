import { useState } from "react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { Grid } from "@mui/material";

const countries = ["Country 1", "Country 2", "Country 3"];

function Navbar() {
  const [country, setCountry] = useState("");
  const [errorValue, setErrorValue] = useState(0);
  const [seed, setSeed] = useState("");

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
    width: 42px;
    color: white;
    margin-left: 1rem;
  `;

  return (
    <nav class="bg-slate-700 p-4 w-full ">
      <div class="flex lg:items-center md:items-center sm:items-start justify-between flex-col md:flex-row lg:flex-row">
        <div className="flex flex-col md:flex-row lg:flex-row md:lg:items-center lg:items-center align-middle justify-between w-40 mr-2">
          <span class="mr-2 text-white">Region:</span>
          <select class="block appearance-none bg-gray-700 border border-gray-600 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700">
            <option>Country 1</option>
            <option>Country 2</option>
            <option>Country 3</option>
          </select>
        </div>
        <div class="flex flex-col md:flex-row lg:flex-row justify-between w-60">
          <span class="mr-8 text-white">Errors:</span>
          <div className="flex w-full justify-between">
            <Slider
              value={typeof errorValue === "number" ? errorValue : 0}
              onChange={handleSliderChange}
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
        <div class="flex flex-col md:flex-row lg:flex-row items-center align-middle justify-between">
          <span class="mr-2 text-white">Seed:</span>
          <div>
            <input
              type="text"
              class="bg-gray-700 border border-gray-600 text-white py-2 px-4 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700 w-20"
            />
            <button class="ml-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded">
              <ShuffleIcon />
            </button>
          </div>
        </div>

        <div class="flex items-center align-middle justify-between">
          <button class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
            Export to CSV
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
