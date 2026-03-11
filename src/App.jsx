import { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult("Please enter both height and weight");
      return;
    }
    const heightInMeters = height / 100;
    const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";
    if (BMI < 18.5) category = "Under Weight";
    else if (BMI < 25) category = "Normal Weight";
    else if (BMI < 30) category = "Over Weight";
    else category = "Obese";

    setResult(`Your BMI is ${BMI} : You are  ${category}`);
  };
  return (
    <div>
      <div className="container">
        <h1>BMI Calculator</h1>

        <label htmlFor="height">Height (cm) </label>
        <input
          type="number"
          id="height"
          placeholder="e.g.150"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        ></input>

        <label htmlFor="weight">Weight (in kg)</label>
        <input
          type="number"
          id="weight"
          placeholder="e.g.60"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>

        <button onClick={calculateBMI}>Calculate</button>
        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default App;
