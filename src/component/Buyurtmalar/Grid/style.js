import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #e5e5e5;
  `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

`;
Wrapper.column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin: 20px;
  background: white;
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  border-radius: 6px;
  height: fit-content;
  /* width: 60rem; */
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
  width: 25%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  row-gap: 15px;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 16px;
    color: #2d3a45;
  }
pi{
  display: flex;
  justify-content: center;
}
.clock{
  margin-right: 50px;
 
}
  img {
    margin-right: 14px;
    margin-left: 30px;
    border: none;
    width: 25px;
  height: 25px;
    /* background: rgba(237, 239, 243, 1); */

  }
  span {
    border-radius: 18px;
    background: #20d472;
    padding: 10px 15px;
    width: 90px;
    height: 40px;
    color: white;
    font-weight: 300;
    line-height: 1.5;
    text-align: center;
    
  }
`;

export const User = styled.div`
  display: flex;
  row-gap: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  width: 25%;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  img {
    opacity: 0.9;
    margin-right: 20px;
  }
  block {
    display: flex;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: 0.533333px;
    color: #2d3a45;
  }
  span {
    font-size: 16px;
    line-height: 18px;
    color: #2d3a45;
  }
`;

export const Payme = styled.div`
  display: flex;
  row-gap: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  width: 25%;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  i {
    font-size: 20px;
    line-height: 18px;
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
  width: 25%;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
  p{
    display: inline-block;
    width:280px;

    /* margin-right: 120px; */
  }
  div {
    display: inline-block;
    align-items: center;
    margin: 10px 15px;
    
    span {
      opacity: 0.5;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      font-weight: 300;
    }
  }
  button {
    border-radius: 50%;
    padding: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    background: white;
    box-shadow: 0 0 0 4px rgb(240 240 240 / 82%);
    margin-right: -100px;;
  }
 
`;




// export const Payme= styled.div``;
