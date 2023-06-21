import React, { useState } from "react";
import "./App.css";

function App() {
  const [bmi, setBmi] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "weight") {
      setWeight(Number(value));
    }
    if (name === "height") {
      setHeight(Number(value));
    }
  };
  const calculateBmi = () => {
    if (weight === 0) alert("I need a weight to calculate BMI !!!");
    if (height === 0) alert("I need a height to calculate BMI !!!");
    if (weight < 0) alert("I need a weight as positive integer to calculate BMI !!!");
    if (height < 0) alert("I need a height as positive integer to calculate BMI !!!");
    if (weight <= 250 && height <= 300) {
      const bmi = weight / (height / 100) ** 2;
      setBmi(bmi);
    } else {
      alert("Weight not more than 250 Kg. and Height not more than 250 Cm.");
      // setWeight(0);
      // setHeight(0);
    }
  };

  const checkBmi = () => {
    if (bmi === 0) return <span>-</span>;
    if (bmi <= 18.5) return <span className="text-yellow-300">น้ำหนักน้อย / ผอม</span>;
    if (bmi > 18.5 && bmi <= 22.9) return <span className="text-green-600">ปกติ (สุขภาพดี)</span>;
    if (bmi >= 23 && bmi <= 24.9) return <span className="text-orange-300">ท้วม / โรคอ้วนระดับ 1</span>;
    if (bmi >= 25 && bmi <= 29.9) return <span className="text-orange-500">อ้วน / โรคอ้วนระดับ 2</span>;
    if (bmi > 30) return <span className="text-red-700"> อ้วนมาก / โรคอ้วนระดับ 3</span>;
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <section>
        <h1 className="text-6xl font-bold text-center mb-5">BMI Calculator</h1>
        <p className="text-xl font-semibold text-center pb-2">คำนวณดัชนีมวลกาย</p>
        <div className="w-auto h-auto">
          <div className="flex flex-col items-center m-2 p-2">
            <label htmlFor="weight" className="block text-center">
              <span className="block text-lg font-medium text-slate-700 pb-2">Weight (Kg)</span>
              <input
                type="number"
                name="weight"
                min={0}
                max={250}
                // value={weight}
                className="peer ... border-2 border-solid border-black rounded-md w-80 xl:w-96 p-2 text-center text-xl"
                onChange={handleInputChange}
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Weight not more than 250 Kg.</p>
            </label>
          </div>
          <div className="flex flex-col items-center m-2 p-2">
            <label htmlFor="height" className="block text-center">
              <span className="block text-lg font-medium text-slate-700 pb-2">Height (Cm)</span>
              <input
                type="number"
                name="height"
                min={0}
                max={300}
                // value={height}
                className="peer ... border-2 border-solid border-black rounded-md w-80 xl:w-96 p-2 text-center text-xl"
                onChange={handleInputChange}
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Height not more than 250 Cm.</p>
            </label>
          </div>
          <div className="flex flex-col items-center m-2 p-2">
            <button type="button" onClick={calculateBmi} className="border-2 border-solid border-black rounded-md w-full p-2 bg-black text-white">
              Calculate
            </button>
          </div>
          <div className="flex flex-col items-center m-2 p-2">
            <h1 className="text-3xl font-bold pb-2">BMI : {bmi.toFixed(2)}</h1>
            <p className="text-2xl font-semibold pb-2">{checkBmi()}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
