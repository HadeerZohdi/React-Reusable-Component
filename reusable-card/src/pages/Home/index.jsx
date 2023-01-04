import React from "react";
import { Routes, Route } from "react-router-dom";
import SoloCard from "./partials/SoloCard";
import ListCard from "./partials/listCards";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<SoloCard />} exact />

      <Route path="/list" element={<ListCard />} exact />
    </Routes>
  );
};

export default Home;
