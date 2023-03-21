import { Header, Counter } from "../components";

export const Home = () => {
  return (
    <>
      <Header
        title="Word Counter"
        subtitle="Free online character and word count tool"
      />
      <Counter />
    </>
  );
};
