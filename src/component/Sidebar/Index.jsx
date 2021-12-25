import React from "react";
import { Container, Item, Title, Wrapper, LogoTitle } from "./style";
import { sidebar } from "../../utils/sidebar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import logout from "../../assets/icons/logout.svg";

export const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="ss" />
        <LogoTitle>
          <p className="p1">Fast Food</p>
          <p>Online Mahsulot Sotuvi</p>
        </LogoTitle>
      </Wrapper>
      {sidebar.map(({ title, pathname, icon: Icon }) => (
        <NavLink
          to={pathname}
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "#2D3A45",
              backgroundColor: isActive ? "#FCB600" : "",
              textDecoration: "none",
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
              // padding: '0 40px',
              transition: "all .3s",
            };
          }}
        >
          <Item>
            <Icon className={"icon"} /> <Title>{title}</Title>
          </Item>
        </NavLink>
      ))}
      <div>
        <img src={logout} alt="consolda xato chiqmedi" /> <p>exit</p>
      </div>
    </Container>
  );
};

export default Sidebar;
