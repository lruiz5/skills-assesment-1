import { Header, Joke } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Jokes = () => {
  useTitle("Jokes");
  return (
    <>
      <Header
        title="Dad Jokes"
        subtitle="Free JSON API for hand curated Dad Jokes"
      />
      <Joke />
    </>
  );
};
