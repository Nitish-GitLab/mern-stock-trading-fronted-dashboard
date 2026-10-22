import React from 'react';
function Team() {
    return ( 
         <div className='container'>
            <div className='row p-5  mt-5 border-top '>
                <h1 className='text-center'>People</h1>
                
            </div>
             <div className='row p-5 mt-5  text-muted  ' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className='col-6 p-5 text-center'>
                    <img src='/media/nitish.jpg' alt='Nitish Yadav' style={{borderRadius:"100%", width:'60%'}} />
                    <h6 className='mt-5'>Nitish yadav</h6>
                    <h5>Founder, CEO</h5>
                </div>
                <div className='col-6 p-5'>
                  <p>Nitish bootstraped and founded Zerodha in 2010 to overcome<br/>the hurdles the face during his decade long sting as a trader.<br/>Today, Zerodha has changed the landscape of the indian <br/>industry</p>
                  <p>He is the member of the SEBI Secondary market<br/>Comittee (SMAC) and the market data Advice<br/>(MDAC)</p>
                  <p>Playing basketball is zen.</p>
                  <p>Connect <a href='/'>Homepage</a> / <a href='/'>Trading on</a> / <a href='/'>Trading QnA</a> / <a href='/'>Twitter</a></p>
                </div>
                
                
            </div>
            
        </div>
     );
}

export default Team;
