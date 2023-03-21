import { Route, Routes } from "react-router-dom";
import { Home, Jokes, NotFound } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dad" element={<Jokes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
