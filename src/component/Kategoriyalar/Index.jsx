import React, { useState } from "react";
import { list } from "../../mock/mahsulotlar.js";
import save from "../../assets/icons/save.svg";
import done from "../../assets/icons/done.svg";
import cancel from "../../assets/icons/cancel.svg";
import clock from "../../assets/icons/clock.svg";
import user from "../../assets/icons/user.svg";
import menuV from "../../assets/icons/menuV.svg";
import menuH from "../../assets/icons/menuH.svg";
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
import Buyurtmalar from "../Buyurtmalar/Index";

export const Mahsulotlar = (props) => {
  const [products, setProducts] = useState(Object.entries(list));
  const [isActive, setisActice] = useState("yangi");

  console.log(Object.entries(list));
  return (
    <Container>
      <Navbar>
        <Navbar.plus>+</Navbar.plus>
        <Navbar.input>
          <input type="text" />
        </Navbar.input>
        <Navbar.tools>icon</Navbar.tools>
      </Navbar>
      <Navbar.link>
        <li>MAXSULOTLAR</li>
        <li>KATEGORIYA</li>
        <li>NARXI</li>
        <li>QO'SHIMCHA</li>
        <li>ACTION</li>
      </Navbar.link>
      <Wrapper>
        {products.map(([key, value], index) =>
         
              <all>
                <Info>
                    <h1>{value.icon}</h1>
                    <h1>{value.type}</h1>
                    <h1>{value.price}</h1>
                    <h1>{value.format}</h1>
                    <h1>{value.action}</h1>
                    <h1>{value.birnima}</h1>
                </Info>
              </all>
            )
        }
      </Wrapper>
    </Container>
  );
};

export default Mahsulotlar;
