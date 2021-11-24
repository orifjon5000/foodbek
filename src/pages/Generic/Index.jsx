import React from "react";
import { Container } from "./style";
import { useLocation } from "react-router-dom";

export const Generic = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>{location.pathname} sws</h1>
    </Container>
  );
};

export default Generic;
