import { useEffect, useState } from "react";

export const Joke = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    async function getJoke() {
      const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      const data = await response.json();

      setJoke(data);
    }

    getJoke();
  }, []);

  return (
    <div className="joke">
      <p data-testid="punchline">{joke.joke}</p>
      <span>- icanhazdadjoke.com</span>
    </div>
  );
};
