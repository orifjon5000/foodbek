import React from "react";
import { Container, Wrapper, Info } from "./style";
import { card } from "../../mock/card";
export const Buyurtmalar = () => {
  console.log(Object.entries(card));
  return (
    <Container>
      <h1>navbar</h1>
      <Wrapper>
        {Object.entries(card).map(([name,data])=>(
          <Wrapper.column>
            {data.map((value)=>
            <Info></Info>
            )}
          </Wrapper.column>
        ))}
        {/* <Wrapper.column>Yangi </Wrapper.column>
        <Wrapper.column>Qabul qilingan</Wrapper.column>
        <Wrapper.column>Jo'natilgan</Wrapper.column>
        <Wrapper.column>Yopilgan</Wrapper.column> */}
      </Wrapper>
    </Container>
  );
};

export default Buyurtmalar;
