
import React, { useRef,useState} from "react";



const Steps=()=>{

let [step,setStep]=useState(1)
    
 let one={
    first:useRef(),
    last:useRef()
}   

 let {first,last}=one;


   let sec={
         num:useRef(),
         expiry:useRef()
     }
     let {num,expiry}=sec
     function handleSubmitt(e){
         e.preventDefault();
         if(!num.current.value || !expiry.current.value)
           {  return}
 
         }
         

 function handleSubmit(e){
    e.preventDefault();
    if(!first.current.value || !last.current.value)
        { return;}
    setStep(2)
 }
   return    <>
   {  step==1 &&   <div id="step1"> 
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

      { step==2 && <div id="step2">
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
        </div> }
   {  step==3 &&  <div id="step3" >
            <h1>Card Details</h1>
            <form onSubmit={handleSubmitt}>
                <label>Card Number:</label>
                <br/>
                <input type="number" id="card_info" ref={num}/>
                <br/>
                <label>Expiry Date:</label>
                <br/>
                <input type="date" id="expiry_date"ref={expiry}/>
                <br/>
    
                <button type="submit">Submit</button>

            </form>
        </div>
}
   
</>
    
}


export default Steps;