import React, { useState } from "react";

function Display({ output }) {
  return <div className="output">{output}</div>;
}

function Button({ char, onButtonClick }) {
  function handleButtonClick() {
    onButtonClick(char);
  }
  return (
    <button className="button" onClick={handleButtonClick}>
      {char}
    </button>
  );
}

function Calculator() {
  const [output, setOutput] = useState("");

  function handleButtonClick(char) {
    if (char === "=") {
      setOutput((prevOutput) => eval(prevOutput).toString());
    } else if (char === "C") {
      setOutput("");
    } else {
      setOutput((prevOutput) => prevOutput + char);
    }
  }

  return (
    <div className="calculator-panel">
      <Display output={output} />
      <div className="row">
        <Button char="7" onButtonClick={handleButtonClick} />
        <Button char="8" onButtonClick={handleButtonClick} />
        <Button char="9" onButtonClick={handleButtonClick} />
        <Button char="+" onButtonClick={handleButtonClick} />
      </div>

      <div className="row">
        <Button char="4" onButtonClick={handleButtonClick} />
        <Button char="5" onButtonClick={handleButtonClick} />
        <Button char="6" onButtonClick={handleButtonClick} />
        <Button char="-" onButtonClick={handleButtonClick} />
      </div>
      <div className="row">
        <Button char="1" onButtonClick={handleButtonClick} />
        <Button char="2" onButtonClick={handleButtonClick} />
        <Button char="3" onButtonClick={handleButtonClick} />
        <Button char="*" onButtonClick={handleButtonClick} />
      </div>
      <div className="row">
        <Button char="C" onButtonClick={handleButtonClick} />
        <Button char="0" onButtonClick={handleButtonClick} />
        <Button char="=" onButtonClick={handleButtonClick} />
        <Button char="/" onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}
export default Calculator;
