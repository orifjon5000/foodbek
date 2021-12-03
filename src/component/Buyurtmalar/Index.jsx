import React, { useState } from "react";
// import { card } from "../../mock/card";

import menuV from "../../assets/icons/menuV.svg";
import menuH from "../../assets/icons/menuH.svg";
import { Container,  Navbar, Menu } from "./style";

import Flex from "./Flex/Index";
import Grid from "./Grid/Index";

export const Buyurtmalar = () => {
  const [isActive, setisActiVe] = useState("yangi");
  const [isGrid, setGrid] = useState("yangi");
  const onChange= (title)=>{isGrid && setisActiVe(title)}
  return (
    <Container>
      <Navbar>
        <Navbar.Container isActive={isGrid}>
          <Navbar.Item
            onClick={() => onChange("Yangi")}
            isActive={isActive === "Yangi"}
          >
            Yangi
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onChange("Qabul")}
            isActive={isActive === "Qabul"}
          >
            Qabul qilingan
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onChange("jonatilgan")}
            isActive={isActive === "jonatilgan"}
          >
            Jo'natilgan
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onChange("Yopilgan")}
            isActive={isActive === "Yopilgan"}
          >
            Yopilgan
          </Navbar.Item>
        </Navbar.Container>
        <Menu>
          <Menu.V onClick={() => setGrid(false)} isactive={!isGrid}>
            <img isactive={!isGrid} src={menuH} alt="v" />
          </Menu.V>
          <Menu.H onClick={() => setGrid(true)} isactive={isGrid}>
            <img isactive={isGrid} src={menuV} alt="v" />
          </Menu.H>
        </Menu>
      </Navbar>
      {isGrid ? <Grid isActive={isActive} />:  <Flex  />}
    </Container>
  );
};

export default Buyurtmalar;
