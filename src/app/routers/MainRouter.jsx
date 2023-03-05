import React from "react";
import HomePage from "../pages/HomePage";
import SigninPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SignupPage";
import { Routes, Route } from "react-router-dom";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signin" element={<SigninPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};

export default MainRouter;
