
import React, { useRef,useState} from "react";



const Step1=({setStep})=>{
    //  let [step,setStep]=useState(1)
    
 let one={
    first:useRef(),
    last:useRef()
}   

 let {first,last}=one;

 function handleSubmit(e){
    e.preventDefault();
    if(!first.current.value || !last.current.value)
        { return;}
    setStep(2)
 }
   return   <div id="step1">
            <h1>Customer Details</h1>
      <form>
                <label>First Name:</label>
                <br/>
                <input type="text" id="first_name" ref={first}/>
                <br/>
                <label>Second Name:</label>
                <br/>
                <input type="text" id="last_name" ref={last}/>
                <br/>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
  
        </div>
    
}


export default Step1;