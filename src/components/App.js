
import React, { useState } from "react";
import './../styles/App.css';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import Steps from "./Step1";
const App = () => {
 let [step,setStep]=useState(1)
  return (
    <div>
     { step==1 && <Step1 setStep={setStep}/>}
     {step==2 && <Step2 setStep={setStep}/>}
     { step==3 && <Step3 setStep={setStep}/>}
    </div>
  )
}

export default App
