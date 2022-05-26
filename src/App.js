import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { GlobalStyleConfig } from "./style/GlobalStyleConfig";
import MainRoute from "./routes/MainRoute";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyleConfig>
        <MainRoute />
      </GlobalStyleConfig>
    </BrowserRouter>
  );
}

export default App;
