import React from "react";
import Main from "./components/Main";
import SideItem from "./components/SideItem";
import "./App.css";

function App() {
  return (
    <div>
      <div className="Container-fluid">
        <div className="row">
          <div className="col-2">
            <SideItem></SideItem>
          </div>
          <div className="col-10">
            <Main></Main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
