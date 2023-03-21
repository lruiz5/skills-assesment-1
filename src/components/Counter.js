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
        data-testid="textArea"
        value={userInput}
        onChange={handleInput}
      ></textarea>
      <button
        data-testid="clearBtn"
        disabled={userInput.length < 1}
        onClick={handleClear}
      >
        Clear
      </button>
      <div className="result">
        <span data-testid="charLength">Character: {userInput.length}</span>
        <span data-testid="wordLength">Word: {words.length}</span>
      </div>
    </div>
  );
};
