import React, { useState } from "react";
import { list } from "../../mock/mahsulotlar.js";
import { AddPlus } from "../Buyurtmalar/style.js";

import { Container, Wrapper, Info, Navbar } from "./style";

export const Mahsulotlar = (props) => {
  const [products, setProducts] = useState(list);
  const Delete = (id) => {
    const Newdata = products.filter((value) => value.id !== id);
    setProducts(Newdata);
  };
  
  return (
    <Container>
      <Navbar>
      
           <AddPlus>
          <span>+</span>
          <p>Yangi buyurtma <br/>qo'shish</p>
        </AddPlus>
        <Navbar.Input>
          <input type="text" />
          <i class="fas fa-search"></i>
        </Navbar.Input>
      </Navbar>
      <Navbar.Link>
        <Navbar.Links>MAXSULOTLAR</Navbar.Links>
        <Navbar.Links>KATEGORIYA</Navbar.Links>
        <Navbar.Links>NARXI</Navbar.Links>
        <Navbar.Links>QO'SHIMCHA</Navbar.Links>
        <Navbar.Links>ACTION</Navbar.Links>
      </Navbar.Link>
      <Wrapper>
        {products.map((value, index) => (
          <Wrapper.Column key={value.id}>
            <Info>
              <image>
                <img src={value.img} alt="" />
              </image>
              <h3>{value.mahsulot}</h3>
              <h3>{value.kategoriya}</h3>
              <h3>{value.price}</h3>
              <h3>{value.format}</h3>
              <action>{value.action}</action>
              <delete onClick={() => Delete(value.id)}>{value.birnima}</delete>
              {/* <h1>{value.mahsulot}</h1> */}
            </Info>
          </Wrapper.Column>
        ))}
        <button onClick={() => setProducts(list)}>Reset</button>
      </Wrapper>
    </Container>
  );
};

export default Mahsulotlar;
