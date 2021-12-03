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
        <Navbar.Links>MAXSULOTLAR</Navbar.Links>
        <Navbar.Links>KATEGORIYA</Navbar.Links>
        <Navbar.Links>NARXI</Navbar.Links>
        <Navbar.Links>QO'SHIMCHA</Navbar.Links>
        <Navbar.Links>ACTION</Navbar.Links>
      </Navbar.Link>
      <Wrapper>
        {products.map(([key, value], index) =>
         
              <Wrapper.Column>
                <Info>
                  <image><img src={value.img} alt="" /></image>
                    <h3>{value.mahsulot}</h3>
                    <h3>{value.kategoriya}</h3>
                    <h3>{value.price}</h3>
                    <h3>{value.format}</h3>
                    <action onClick={(id)=>!value.id===id}>{value.action}</action>
                    <delete>{value.birnima}</delete>
                </Info>
              </Wrapper.Column>
            )
        }
      </Wrapper>
    </Container>
  );
};

export default Mahsulotlar;
