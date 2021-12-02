import React, { useState } from "react";
import { card } from "../../../mock/card";
import save from "../../../assets/icons/save.svg";
import done from "../../../assets/icons/done.svg";
import cancel from "../../../assets/icons/cancel.svg";
import clock from "../../../assets/icons/clock.svg";
import user from "../../../assets/icons/user.svg";
import plus from "../../../assets/icons/plus.svg";
import {
  Container,
  Wrapper,
  Info,
  Navbar,
  Order,
  User,
  Payme,
  Save,
  Menu,
} from "./style";
import Buyurtmalar from "../Index";

export const Mahsulotlar = ({isActive}) => {
  const [products, setProducts] = useState(Object.entries(card));
  // const [isActive, setisActice] = useState("yangi");

  console.log(Object.entries(card));
  return (
    <Container>
 

      <Wrapper>
        {products.map(([key, value], index) =>
          value
            .filter((a) => a.categoria.toLowerCase() === isActive.toLowerCase())
            .map((item) => (
              <all>
                <Info>
                  <Order>
                    <p>
                      <span>{item.orderId}</span>
                      <img src={save} alt="dsave" />
                    </p>
                    <pi>
                      <img src={clock} alt="clock" /> 00:24
                    </pi>
                  </Order>
                  <User>
                    <block>
                      <img src={user} alt="user" /> {item.user.name}
                    </block>
                    <span>{item.user.phone}</span>
                  </User>
                  <Payme>
                    <p>
                      Umumiy summa:
                      <br />
                      <i>{item.total}</i>
                    </p>
                    <pi>
                      <span></span> Payme
                    </pi>
                  </Payme>
                  <Save>
                    <div>
                      <p>
                        <span>operator:</span> {item.operator.name}
                      </p>
                      <button>
                        <img src={cancel} alt="" />
                      </button>
                    </div>
                    <div>
                      <p>
                        {item.filial.title}
                        {item.filial.location}
                      </p>{" "}
                      <button>
                        <img style={{ width: "12px" }} src={done} alt="" />
                      </button>
                    </div>
                  </Save>
                </Info>
              </all>
            ))
        )}
      </Wrapper>
      
    </Container>
  );
};

export default Mahsulotlar;
