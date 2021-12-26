import styled from "styled-components";

export const Container = styled.div`
  /* margin:0;   */
  display: flex;
  flex-direction: column;
  width: 340px;
  background: white;
  height: 800px;
  .icon {
    width: 40px;
    height: 40px;
    padding: 10px;
    background: #f6f6f6f6;
    margin-right: 12px;
    margin-left: 50px;
    border-radius: 8px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0;
`;

export const Title = styled.div`
  text-decoration: none;
`;

//lOGO CSS

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 64px;
  margin-left: 24px;
  img {
    border-radius: 50%;
    margin-right: 20px;
  }
`;
export const LogoTitle = styled.div`
  display: flex;
  flex-direction: column;
  
  .p1 {
    width: 74px;
    height: 19px;
    font-size: 16px;
    opacity: 1;
    color: #2d3a45;
  }
  p {
    width: 100%;
    height: 14px;
    font-size: 12px;
    text-align: center;
    color: #2d3a45;
    opacity: 0.5;
  }
`;
