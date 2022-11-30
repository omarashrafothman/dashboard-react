import "./App.css";
import React from "react";
import Sidebar from "./component/sidebar section/sidebar.jsx";
import Body from "./component/body section/Body.jsx";
function App() {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
