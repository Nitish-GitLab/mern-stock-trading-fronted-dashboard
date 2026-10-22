import React from 'react';
function Brokerage() {
    return ( 
         <div className='container'>
       
        <div className='row mt-5 text-center border-top'>
            <div className='col-8 p-4 text-left'> 
               <a href='/' style={{textDecoration:"none"}}> <h1 className='fs-5'>brokrage calculator</h1></a>
               <ul style={{textAlign:"left", lineHeight:".5", fontSize:"12px"}} className='text-muted fs-6'>
                <li>call & trade and RMS auto-squareoff: Additional charges of $ 50 $50 +GST per order.</li>
                <li>Digital control notes will be sent via e-mail</li>
                <li>Physical copies of contract notes, if required, shall be charges $20 per contact note. Courier</li>
                <li>For Nri Account(non-PIS)0.5% or $100 per executed order for equity(whichever lower)</li>
                <li>if the account is in debit balance, any order placed will be charged $40 per executed order instead of</li>

               </ul>

            </div>
            <div className='col-4 p-4'> 
               <a href='/' style={{textDecoration:"none"}}>  <h1 className='fs-5'>List of charges</h1></a> 
            </div>
           
             
        </div>
      </div>
     );
}

export default Brokerage;

