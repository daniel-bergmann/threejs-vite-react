import React, { useEffect } from "react";
import "./App.css";

import { threeJsLogic } from "./lib/three";

function App() {
  useEffect(() => {
    threeJsLogic();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
