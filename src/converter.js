import React from "react";


class Converter extends React.Component {
  convert = (e) => {
    e.preventDefault();
    const unitselecter = document.querySelector('input[name="unitselecter"]:checked').value;
    const result = document.getElementById("result");
    const val = document.getElementById("val").value;

    if (unitselecter==="fahrenheitToCelsius") {
      const res = (parseInt(val) - 32) * 5 / 9;
      result.innerHTML = val + " F is " + res + " C";
    }
    if (unitselecter==="kilometersToMiles") {
        const res = (parseFloat(val)*0.621371);
        result.innerHTML = val + " KM is " + res + " Miles";
    }

    if (unitselecter==="metersToFeet") {
        const res = (parseFloat(val)*3.28084);
        result.innerHTML = val + " Meters is " + res + " Feets";
    }
  };

  render() {
    return (
      <>
        
        <form>
          <fieldset style={{ textAlign: "center" }}>
            <legend>Unit Converter</legend>

            <p>
              <h1>Temperature Converter</h1>
              <input type="radio" name="unitselecter" value="fahrenheitToCelsius" />
              <label>Fahrenheit to Celsius</label>
              <br />
              <h1>Distance Converter</h1>
              <input type="radio" name="unitselecter" value="kilometersToMiles" />
              <label>Kilometers to Miles</label>
              <br />
              <h1>Height Converter</h1>
              <input type="radio" name="unitselecter" value="metersToFeet" />
              <label>Meters to Feet</label>
              <br />
            </p>
          </fieldset>
          <fieldset style={{ textAlign: "center" }}>
            <legend>Enter the value</legend>
            <input type="text" name="val" id="val" />
            <button type="submit" onClick={this.convert}>
              Convert
            </button>
            <p id="result"></p>
          </fieldset>
        </form>
      </>
    );
  }
}

export default Converter;
