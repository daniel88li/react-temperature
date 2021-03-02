import React from "react";

const scaleNames = {
  c: "celsius",
  f: "fahrenheit",
};

function TemperatureInput(props) {
  const scale = props.scale;
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        name={scaleNames[scale]}
        scale={scale}
        value={props.temperature}
        onChange={props.onChange}
      />
    </fieldset>
  );
}

export default TemperatureInput;
