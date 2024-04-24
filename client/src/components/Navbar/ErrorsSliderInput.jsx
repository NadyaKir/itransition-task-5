import React from "react";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";

const Input = styled(MuiInput)`
  color: white;
  margin-left: 1rem;
`;

const handleBlur = (errorValue, setErrorValue) => {
  if (errorValue < 0) {
    setErrorValue(0);
  } else if (errorValue > 1000) {
    setErrorValue(1000);
  }
};

const ErrorSliderInput = ({ value, onChange, errorValue, setErrorValue }) => {
  return (
    <div className="flex w-full md:w-auto justify-between flex-col md:flex-row">
      <Slider
        value={typeof value === "number" ? value : 0}
        onChange={onChange}
        min={1}
        max={10}
        step={0.25}
        aria-labelledby="input-slider"
      />
      <Grid item>
        <Input
          value={value}
          size="small"
          onChange={onChange}
          onBlur={() => handleBlur(errorValue, setErrorValue)}
          inputProps={{
            step: 1,
            min: 0,
            max: 1000,
            "aria-labelledby": "input-slider",
          }}
        />
      </Grid>
    </div>
  );
};

export default ErrorSliderInput;
