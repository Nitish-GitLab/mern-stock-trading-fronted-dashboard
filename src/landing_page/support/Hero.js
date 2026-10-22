import React from 'react';
function Hero() {
    return ( 
       <section className='container-fluid' id='supportHero'>

        <div className='p-3 ' id='supportWrapper'>
            <h3>Support Portal</h3>
            <span className='support-topic'>Track Tickets</span>
        </div>
        <div className='row p-3 m-5'>
            <div className='col-6 p-5'>
                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder='Eg. how do i activate F&O'/>
                <br/>
                <span className='support-topic'>Track account opening</span>

                <span className='support-topic'>track segment activation</span>
                <span className='support-topic'>intraday margins</span>
                <span className='support-topic'>kite user manuals</span>
            </div>
             <div className='col-6 p-3 '>
                <h1 className='fs-3'>Featured</h1>
               <ol>
                <li >
                    <span className='support-topic'>Current Tkaovers and Delisting - january 2024</span>
                </li>
                <li>
                    <span className='support-topic'>Latest intraday leverages -MIS $ CO</span>
                </li>
               </ol>
             </div>
        </div>
       </section>
     );
}

export default Hero;