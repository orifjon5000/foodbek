import styled from "styled-components";

export const Container = styled.div`
  /* margin:0;   */
  display: flex;
  flex-direction: column;
  width: 300px;
  background: white;
  height: 100vh;
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
  margin: 28px 72px 64px 24px;
  img {
    border-radius: 50%;
    margin-right: 20px;
  }
`;
export const LogoTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    position: absolute;
    width: 74px;
    height: 19px;
    left: 114px;
    top: 45px;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #2d3a45;
  }
  p {
    position: absolute;
    width: 114px;
    height: 14px;
    left: 98px;
    top: 80px;
    font-size: 12px;
    /* identical to box height */
    text-align: center;
    color: #2d3a45;
    opacity: 0.5;
  }
`;
