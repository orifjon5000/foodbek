import React, { useState } from "react";
import { list } from "../../mock/mahsulotlar.js";

import {
  Container,
  Wrapper,
  Info,
  Navbar,
  
} from "./style";

export const Mahsulotlar = (props) => {
  const [products, ] = useState(Object.entries(list));

  console.log(Object.entries(list));
  return (
    <Container>
      <Navbar>
        <Navbar.Plus>+</Navbar.Plus>
        <Navbar.Input>
          <input type="text" />
        </Navbar.Input>
        <Navbar.Tools>icon</Navbar.Tools>
      </Navbar>
      <Navbar.Link>
        <li>MAXSULOTLAR</li>
        <li>KATEGORIYA</li>
        <li>NARXI</li>
        <li>QO'SHIMCHA</li>
        <li>ACTION</li>
      </Navbar.Link>
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
