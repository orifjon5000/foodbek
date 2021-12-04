import React from "react";
import { Container } from "./style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buyurtmalar from "../component/Buyurtmalar/Index";
import { sidebar } from "../utils/sidebar";
import Sidebar from "../component/Sidebar/Index";

export const Root = () => {
  return (
    <Container>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {sidebar.map(({ id, pathname, component: Element }) => (
            <Route key={id} path={pathname} element={<Element />} />
          ))}
          <Route path="/" element={<Buyurtmalar />} />
          <Route path="*" element={<h2>Adashdin</h2> } />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default Root;
