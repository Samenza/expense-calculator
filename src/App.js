import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRoute from "./routes/MainRoute";
import { GlobalStyleConfig } from "./style/GlobalStyleConfig";
import NotificationContextProvider from "./context/NotificationContextProvider";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyleConfig>
        <NotificationContextProvider>
          <MainRoute />
        </NotificationContextProvider>
      </GlobalStyleConfig>
    </BrowserRouter>
  );
}

export default App;
