import React, { useState } from "react";
import { list } from "../../mock/mahsulotlar.js";
import Drawer from "../Drawer/Index";
import { Container, Wrapper, Info, Navbar } from "./style";

export const Mahsulotlar = (props) => {
  const [products] = useState(Object.entries(list));
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Navbar>
        <Drawer open={open} onClos={onClose}>
          <h1>hello</h1>
        </Drawer>
        <Navbar.Item onClick={() => setOpen(!open)}>
          {open ? "close" : "open"}
        </Navbar.Item>
        <Navbar.Plus>+</Navbar.Plus>
        <Navbar.Input>
          <input type="text" />
        </Navbar.Input>
        <Navbar.Tools>icon</Navbar.Tools>
      </Navbar>
      {/* <Navbar.Link>
        <li>MAXSULOTLAR</li>
        <li>KATEGORIYA</li>
        <li>NARXI</li>
        <li>QO'SHIMCHA</li>
        <li>ACTION</li>
      </Navbar.Link> */}
      <Wrapper>
        {products.map(([key, value], index) => (
          <all>
            <Info>
              <h4>{value.price}</h4>
              <h4>{value.action}</h4>
              <h4>{value.birnima}</h4>
              <h4>{value.format}</h4>
            </Info>
          </all>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Mahsulotlar;
