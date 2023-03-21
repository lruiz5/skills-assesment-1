import { useState } from "react";

export const Counter = () => {
  const [userInput, setUserInput] = useState("");
  const [words, setWords] = useState([]);

  const handleInput = (e) => {
    setUserInput(e.target.value);

    //calculate words
    setWords(userInput.split(" "));
  };

  const handleClear = () => {
    setUserInput("");
    setWords([]);
  };

  return (
    <div className="counter">
      <textarea
        name="userInput"
        id="userInput"
        cols="30"
        rows="10"
        placeholder="Type or paste your text"
        value={userInput}
        onChange={handleInput}
      ></textarea>
      <button onClick={handleClear}>Clear</button>
      <div className="result">
        <span>Character: {userInput.length}</span>
        <span>Word: {words.length}</span>
      </div>
    </div>
  );
};
