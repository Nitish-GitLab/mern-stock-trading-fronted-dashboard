import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5+<br/>lakh crores worth of equity investments.</p>
                    <h2 className='fs-4'>No Sparm or gimmicks</h2>
                    <p className='text-muted'>No giimmicks, sparm, "gamification", or annoying push<br/>notifications. High high quality apps that you use at your pace, the<br/>way you like.</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investements in<br/>30+ fintech startups ofter you tailored services specific to<br/>your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>with initiavities like Nudge and kill Switch, we dont,t just <br />facilitate transactions, but actively help you do better with<br />your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='/media/ecosystem.png' alt='Zerodha product ecosystem' style={{width:"75%"}}></img>
                    <div className='text-center'>
                        <a href='https.iml' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                        <a href='https.uml' style={{textDecoration:"none"}}>try kite Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;