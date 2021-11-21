import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#0000ff").all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const generateRandomColor = () => {
    let letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
    let colors = new Values(color).all(5);
    setList(colors);
  };

  return (
    <>
      <section className="container">
        <h3>Random color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#0000ff"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Enter
          </button>
          <button className="btn-rdm" onClick={generateRandomColor}>
            Generate random color
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
