import { Container } from "@/components/container/container";
import { pricesDataWoman } from "./dataWoman";
import { pricesDataMen } from "./dataMen";

import WaxStick from "../../assets/landing/wax-sticks.webp";

export const Prices = () => {
  return (
    <div className="prices">
      <Container>
        <h1>Services - Prices</h1>
        <div className="prices__list">
          <div className="list list__woman">
            <h2>
              <span>
                <img src={WaxStick} alt="" />
              </span>
              Women
            </h2>
            {pricesDataWoman.map((doc) => {
              return (
                <div className="prices__item">
                  <p>{doc.name}</p>
                  <span></span>
                  <p>{doc.price}</p>
                </div>
              );
            })}
          </div>

          <div className="list list__men">
            <h2>
              Men{" "}
              <span>
                <img src={WaxStick} alt="" />
              </span>
            </h2>
            {pricesDataMen.map((doc) => {
              return (
                <div className="prices__item">
                  <p>{doc.name}</p>
                  <span></span>
                  <p>{doc.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
