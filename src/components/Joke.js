import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <p>
        {joke.joke} -{" "}
        <Link
          to="https://icanhazdadjoke.com"
          target={"_blank"}
          referrerPolicy="no-referrer"
        >
          icanhazdadjoke.com
        </Link>
      </p>
    </div>
  );
};
