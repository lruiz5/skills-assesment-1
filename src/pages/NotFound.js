import { useNavigate } from "react-router-dom";
import PNF from "../assets/page-not-found.jpg";
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="pnf">
      <div className="oops">
        <p>Oops - Page Not Found!</p>
        <img src={PNF} alt="Oops" />
        <button onClick={() => navigate("/")}>Back To Word Counter</button>
      </div>
    </div>
  );
};
