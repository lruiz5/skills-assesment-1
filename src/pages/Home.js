import { Header, Counter } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Word Counter");
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
