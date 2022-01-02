import React from "react";
import { Navbar, AddPlus } from "./Style";
export  function Index() {
  return (
    <div>
      <Navbar>
        <AddPlus>
          <span>+</span>
          <p>
            Yangi buyurtma <br />
            qo'shish
          </p>
        </AddPlus>
        <Navbar.Input>
          <input type="text" />
          <i class="fas fa-search"></i>
        </Navbar.Input>
      </Navbar>
    </div>
  );
};
export default Index;
