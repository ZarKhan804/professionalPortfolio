import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Allfolder from "./Components/Allfolder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Allfolder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;