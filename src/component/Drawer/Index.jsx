import React from "react";
import { Drawer, Close } from "./style";

export const Index = ({ children, open, onClos }) => {
  return (
    <Drawer open={open}>
      <Close onClick={onClos}> X</Close>
      {children}
    </Drawer>
  );
};
export default Index;