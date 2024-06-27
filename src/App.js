import React from "react";
import { Mycontextprovider } from "./components/context";
import Component from "./components/componenta";
function App() {
  return (
    <Mycontextprovider>
    <div className="App">
      <h1>Context api example</h1>
      <Component />
    </div>
      </Mycontextprovider>
  );
}

export default App;
