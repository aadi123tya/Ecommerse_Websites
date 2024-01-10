import { useState } from "react";

import "./App.css";
import Services from "./Component/HomeElement/Services";
import TrustedCom from "./Component/HomeElement/TrustedCom";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <Services />
      <TrustedCom/>
      {/* <Contact/> */}
    </>
  );
}

export default App;
