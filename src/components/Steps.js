
import React, { useRef,useState} from "react";



const Steps=()=>{

let [step,setStep]=useState(1)
    
 let one={
    first:useRef(),
    last:useRef()
}   

 let {first,last}=one;

 let ones={
    firsts:useRef(),
    lasts:useRef()
}   

 let {firsts,lasts}=ones;


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
   {   step==1   ?<div id="step1" style={{display:"block"}}>
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
                <button type="button" onClick={handleSubmit}>Next</button>
            </form>
  
        </div>
        :<div style={{display:"none"}}> </div> 
}

      { step==2   ? <div  style={{display:"block"}} >
            <h1>Car Details</h1>
            <form  onSubmit={((e)=>{ e.preventDefault();  if(!firsts.current.value || !lasts.current.value) return; setStep(3)})}>
                <label>Brand:</label>
                <br/>
                <input type="text" id="brand" ref={firsts}/>
                <br/>
                <label>Model:</label>
                <br/>
                <input type="text" id="model" ref={lasts}/>
                <br/>
                <button type="button" onClick={()=>setStep(1)}>Previous</button>
                <button type="submit">Next</button>

            </form>
        </div>  :<div style={{display:"none"} } id="step2"> </div> }
   {  step==3   ?  <div  style={{display:"block"}}>
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
        </div>  : <div style={{display:"none"}} id="step3"> </div>
}
   
</>
    
}


export default Steps;