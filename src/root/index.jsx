import React from "react";
import { Container } from "./style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default Root;
