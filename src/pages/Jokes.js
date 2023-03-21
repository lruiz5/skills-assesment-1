import { Header, Joke } from "../components";

export const Jokes = () => {
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
