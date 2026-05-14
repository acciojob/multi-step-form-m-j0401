


import React, { useRef } from "react";

const Step3=({setStep})=>{

    let sec={
        num:useRef(),
        expiry:useRef()
    }
    let {num,expiry}=sec
    function handleSubmit(e){
        e.preventDefault();
        if(!num.current.value || !expiry.current.value)
          {  return}

        }
        

    return (
        <div id="step3">
            <h1>Card Details</h1>
            <form onSubmit={handleSubmit}>
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
    )
}

export default Step3