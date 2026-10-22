import React from 'react';

function  Education() {
    return (
        <div className='container'>
            <div className='row'>
                   <div className='col-6'>
                    <img src='/media/education.svg' alt='Market education illustration' style={{width:"70%"}} />


                </div>
                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsitty, the largest online stock market education book in the world<br/>covering everything from the basics to advanced trading.</p>
                    <a href='https.iml' className='mx-5' style={{textDecoration:"none"}}>Versity<i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                     <p className='mt-5'>TradingQ&A, the most active trading and investment coomunity in<br/>india for all your market related queries.</p>
                    <a href='https.iml' className='mx-5' style={{textDecoration:"none"}}>TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>
                
                
            </div>
        </div>
       
      );
}

export default Education ;