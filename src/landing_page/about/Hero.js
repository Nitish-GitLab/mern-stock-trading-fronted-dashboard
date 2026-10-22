import React from 'react';
function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 mb-5 mt-5'>
                <h1 className='fs-2 text-center'>we pioneered the discount broking model in India. Now,<br/> we are breakingground with our technology</h1>
                
            </div>
             <div className='row p-5 mt-5 border-top text-muted  ' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className='col-6 p-5'>
                    <p>We kick- started operations on the 15th of Ausgust, 20210<br/>with the goal of breaking all baries that traders and<br/>investors face in indian in terms of cost, support, and<br/>technology we named the company Zerodha,a<br/>a combination of zero and"Rodha", the Sanskrit word for<br/>barrier.</p>
                    <p>Today our disruptive pricing models and in-house<br/>technology have made made us the biggest stock broker in<br/>India.</p>
                    <p>Over 1+ Crore clients place millions of orders every day<br/>thoriugh our powerful ecosystem of investement<br/>platforms, contributing over 15% of all indian retail<br/><br/>trading volumes.</p>
                </div>
                <div className='col-6 p-5'>
                    <p>In adiition , we run a number of popular open online<br/>education and community initiatives to empower ratail<br/>traders and investors</p>
                    <p> <a href='/' style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested<br/>in several fintech startups with the goal of growinfg the <br/>indian capital markets.</p>
                    <p>And yet, we are always up to something new everydo<br/>Catch up on the latest updates on our blog or system<br/>the media is saying about us.</p>
                </div>
                
                
            </div>
            
        </div>
     );
}

export default Hero;