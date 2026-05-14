

import React,{useRef} from "react";
import Step1 from "./Step1";

const Step2=({setStep})=>{
  
let one={
    first:useRef(),
    last:useRef()
 }   
 let {first,last}=one;

    return (
        <div>
            <h1>Car Details</h1>
            <form  id= "step2" onSubmit={((e)=>{ e.preventDefault();  if(!first.current.value || !last.current.value) return; setStep(3)})}>
                <label>Brand:</label>
                <br/>
                <input type="text" id="brand" ref={first}/>
                <br/>
                <label>Model:</label>
                <br/>
                <input type="text" id="model" ref={last}/>
                <br/>
                <button type="button" onClick={()=>setStep(1)}>Previous</button>
                <button type="submit">Next</button>

            </form>
        </div>
    )
}

export default Step2