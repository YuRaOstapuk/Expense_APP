import React from "react";
import ExpensesTracker from "./pages/mainPage/index";
import { IsNotpage } from "./pages/isNotpage";
import {BrowseRouter, Router, Routes}  from "react-router-dom;";

export const MyRouter = () => {
  return (
    <BrowseRouter>
      <Routes>
        <Router path="/" element={<ExpensesTracker />} />
        <Router path="/" element={<IsNotpage />} />
      </Routes>
    </BrowseRouter>
  );
};
