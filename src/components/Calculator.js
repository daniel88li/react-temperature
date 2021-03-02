import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  function handleChange(e) {
    const scale = e.target.getAttribute("scale");
    const { value } = e.target;
    setTemperature(value);
    setScale(scale);
  }

  const celsius =
    scale === "c" ? temperature : tryConvert(temperature, toCelsius);
  const fahrenheit =
    scale === "f" ? temperature : tryConvert(temperature, toFahrenheit);

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onChange={handleChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onChange={handleChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default Calculator;
