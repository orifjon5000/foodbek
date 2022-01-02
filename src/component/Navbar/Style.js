import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 30px;
  height: 100px;
  background: white;
`;
export const AddPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid #edeff3;
  width: 20%;
  span {
    margin-right: 15px;
    width: 36px;
    height: 30px;
    color:#fff;
    text-align: center;
    line-height:1.6;
    border-radius: 50%;
    background: rgba(32, 212, 114, 1);
  }
`;
Navbar.Input = styled.div`
 
  margin-left: 15px;
  outline: none;
  border: none;
  background: rgba(237, 239, 243, 1);
  border-radius: 24px;
  width: 300px;
  height: 48px;
  padding:12px;
 input{
   outline: none;
   background: transparent;
   border: none;
   padding-right: 50px;
 }
`;