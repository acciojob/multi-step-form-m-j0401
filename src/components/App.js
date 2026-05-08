
import React, { useState } from "react";
import './../styles/App.css';
// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";

import Steps from "./Steps";
const App = () => {
  let [step,setStep]=useState(1)
  return (
    <div>
      <Steps/>
    </div>
  )
}

export default App
