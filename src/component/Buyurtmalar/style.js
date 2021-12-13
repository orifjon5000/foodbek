import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #e5e5e5;
  padding: 20px 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
Wrapper.column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`;

export const Info = styled.h1`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 15px;
  background: white;
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  border-radius: 6px;
  height: 335px;
`;

export const Title = styled.div`
  padding-bottom: 10px;
  text-transform: capitalize;
`;

export const Order = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0 10px 0;
  border-radius: 8px;
  p {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 16px;
    color: #2d3a45;
  }
  img {
    margin-right: 14px;
    margin-left: 14px;
    border: none;
  }
  span {
    border-radius: 18px;
    background: #20d472;
    padding: 10px 15px;
    width: 60px;
    height: 30px;
    color: white;
    font-weight: 300;
    line-height: 1;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 15px;
  img {
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-right: 20px;
  }
  block {
    display: flex;
    justify-content: space-evenly;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.533333px;
    color: #2d3a45;
  }
  span {
    font-size: 12px;
    line-height: 18px;
    color: #2d3a45;
    opacity: 0.7;
  }
`;

export const Payme = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 0.366667px;
  color: #8d9ba8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  i {
    font-size: 20px;
    line-height: 18px;
    /* identical to box height, or 90% */

    letter-spacing: 0.666667px;

    color: #2d3a45;
  }

  pi {
    font-size: 14px;
    line-height: 18px;
    color: #2d3a45;
    opacity: 1;
  }
`;

export const Save = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 15px;
    span {
      opacity: 0.5;
      font-weight: 300;
    }
  }
  button {
    border-radius: 50%;
    padding: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    background: white;
    box-shadow: 0 0 0 4px rgb(240 240 240 / 82%);
  }
`;
export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  height: 100px;
  background: white;
`;

Navbar.Container = styled.div`
  display: flex;
  align-items: center;
  background: rgba(237, 239, 243, 1);
  width: 700px;
  height: 45px;
  border-radius: 22px;
  margin-right: 80px;
  padding: 20px 10px; ;
  opacity: ${({isActive})=> isActive ? 1 : .3};
  cursor: ${({isActive})=> isActive? 'pointer':'not-allowed'}   
`;

Navbar.Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 162px;
  margin-right: 20px;
  background: ${({ isActive }) => isActive && "white"};
  box-shadow: ${({ isActive }) => isActive && "rgba(174, 176, 181, 0.314986)"};
  border-radius: 18px;
  cursor: inherit;
  transition: 0.3s all ease;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 35px;
  background: #edeff3;
  border-radius: 24px;
  margin-left: 20px;
`;

Menu.V = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: 3px;
  margin-right: 5px;
  width: 40px;
  background: ${({ isactive }) => isactive && "white"};
  border-radius: 50%;
  cursor: pointer;
  img {
    fill: ${({ isactive }) => isactive && "#8d9ba8"}
  }
`;
Menu.H = styled.div`
  cursor: pointer;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  /* margin-left: 3px; */
  margin-right: 5px;
  width: 40px;
  background: ${({ isactive }) => isactive && "white"};
  fill:  ${({ isactive }) => isactive && "#8d9ba8"};
  & path {
    fill: red;
  }
  border-radius: 50%;
  cursor: pointer;
`;

// export const Payme= styled.div``;
