import React from "react";
import Products from "./components/Products";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <div>
      <div className="Container-fluid">
        <div className="row">
          <div className="col-2">
            <SideBar></SideBar>
          </div>
          <div className="col-10">
            <Products></Products>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
