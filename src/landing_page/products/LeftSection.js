import React from 'react';
function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageUrl} alt={productName} />
                </div>
            
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try demo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn more</a>

                    </div>
                    <div className='mt-3'>
                       
                    <a href={googlePlay}><img src='/media/googlePlaybadge.svg' alt='Google Play' /></a>
                    <a href={appStore}><img src='/media/appstoreBadge.svg' alt='App Store' /></a>

                    </div>
                    
                   
                    
                    

                </div>
            </div>
        </div>
        
        
     );
}

export default LeftSection;