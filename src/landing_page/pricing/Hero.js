import React from 'react';
function Hero() {
    return ( 
      <div className='container'>
        <div className='row p-5 border-bottom mt-5 text-center'>
            <h1>Pricing</h1>
            <h3 className='text-muted  mt-3 fs-5'>free equity investements and flat $20 traddy and F&O traders</h3>
        </div>
        <div className='row mt-5 text-center'>
            <div className='col-4 p-4'>
                <img src='/media/pricingEquity.svg' alt='Free equity delivery' />
                <h1 className='fs-3'>Free equity delivery</h1>
                <p className='text-muted'>All equity delivery investements (NSE, BsE) are absolutely free-$<br/>brokrage</p>
            </div>
            <div className='col-4 p-5'>
                <img src='/media/intradayTrades.svg' alt='Intraday and F&O trades' />
                <h1>intraday and F&O trades</h1>
                <p className='text-muted'>flat RS. or 0.03% while(whicheecevis lower)<br/>per excuted order on intraday trades<br/>across executed, currency, and commodity<br/>trades.</p>
            </div>
            <div className='col-4 p-5'>
                <img src='/media/pricingEquity.svg' alt='Mutual fund investments' />
                <h1 className='fs-3'>Free equity delivery</h1>
                <p className='text-muted'>All direct mutual fund</p>
            </div>
             
        </div>
      </div>
     );
}

export default Hero;