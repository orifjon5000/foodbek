import styled from "styled-components";

export const Drawer = styled.div`
  position: absolute;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-400px")};
  z-index: 1111;
  background: red;
  transition: all 0.6s;
  height: 100vh;
  width: 300px;
  cursor: pointer;
  

`;
export const Close = styled.div`
display: flex;
align-items: center;
padding:10px;
cursor: pointer;
  position: absolute;
  left: -50px;
  top: 50px;
  bottom: 90.34%;
width: 90px;
height: 50px;
  background: red;
  box-shadow: 0px 10px 20px rgba(176, 177, 181, 0.246941);
  border-radius: 25px;
`;
