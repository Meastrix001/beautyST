import { Container } from "@/components/container/container";
import BrandLogo from "../../assets/landing/brand-logo.png";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="navigation">
      <Container>
        <div className="navigation__brand">
          {" "}
          <img src={BrandLogo} alt="" />
        </div>

        <div className="navigation__menu">
          <ul>
            <li onClick={() => navigate("/")}>
              <span>Home</span>
            </li>
            <li onClick={() => navigate("/services-prices")}>
              <span>Services & prices</span>
            </li>

            <li onClick={() => navigate("/about")}>
              <span>About me</span>
            </li>
            <li onClick={() => navigate("/contact")}>
              <span>Contact</span>
            </li>
          </ul>
        </div>

        <div className="navigation__socials">
          <ul>
            <li>fb</li>
            <li>yt</li>
            <li>insta</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
