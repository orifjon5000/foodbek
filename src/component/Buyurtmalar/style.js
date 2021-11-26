import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: violet;
`;

export const Wrapper = styled.div`
  background: red;
 
`;
Wrapper.column = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  height: 100vh;
  background: whitesmoke;
  border-right: 1px solid black;
`;

export const Info = styled.h1`
  background: red;
 
`;
