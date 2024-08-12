import { Container } from "@/components/container/container";
import BrandLogo from "../../assets/landing/brand-logo.png";
import WaxSticks from "../../assets/landing/wax-sticks.webp";
import WaxPots from "../../assets/landing/wax-pot.webp";
import LandingLegs from "../../assets/landing/smooth-in-grown-free-legs-e144529772770-Photoroom (2) (1).png";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="div-one" />
      <div className="div-two" />

      <div className="landing__hero"></div>

      <Container>
        <div className="landing__content">
          <div className="content">
            <div className="content__logos">
              <img className="logos__brand" src={BrandLogo} alt="" />
              <img className="logos__brand-background" src={WaxSticks} alt="" />
            </div>
            <h1>Choose smooth</h1>
            <span>Scroll down for some magic</span>
          </div>
          {/* <div className="content__alt">
            <div>
              <h2>Waxing in paide</h2>
              <p>waxing 123</p>
            </div>
          </div> */}
        </div>
      </Container>
      <div className="landing__image">
        <img src={LandingLegs} alt="" />
      </div>

      <div className="landing__below-fold">
        <div className="below-fold">
          <div className="div-three" />
          <div className="div-four" />

          <div className="below-fold__wax-pot">
            <img src={WaxPots} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
