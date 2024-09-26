import React, { useEffect } from "react";
import Counter from "./components/Counter";
import HideShow from "./components/HideShow";

const App = () => {
  useEffect(() => {
    console.log("Effect Body");
  }, []);
  return <div>
    {/* <Counter/> */}
    <HideShow/>
  </div>;
};

export default App;
