import { useNavigate } from "react-router-dom";
import PNF from "../assets/page-not-found.jpg";
import { useTitle } from "../hooks/useTitle";
export const NotFound = () => {
  const navigate = useNavigate();
  useTitle("Page Not Found");
  return (
    <div className="pnf">
      <div className="oops">
        <p data-testid="oopsHeading">Oops - Page Not Found!</p>
        <img src={PNF} alt="Oops" />
        <button data-testid="returnToHome" onClick={() => navigate("/")}>
          Back To Word Counter
        </button>
      </div>
    </div>
  );
};
