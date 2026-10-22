import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductsPage() {
    return (  
        <>
        <Hero/>
        <LeftSection  imageUrl="/media/kite.png"
                       productName="Kite"
                  productDescription="Our ultra-fast flagship trading platform with streaming market data,<br/>advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your<br/>android and ios Devices"
                   tryDemo=""
                   learnMore=""
                   googlePlay=""
                  appStore=""
    /> 
    <RightSection  imageUrl="/media/console.png"
                       productName="console"
                  productDescription="The central dashboard for your Zerodha account. Gain insights into your traders and investements<br/>with in-depth reports and visualizationss."
                   learnMore=""/>
     <LeftSection 
     imageUrl="/media/coin.png"
                       productName="coin"
                  productDescription="Buy direct mutual funds online, commisin-free, delivered directly to<br/>your Demat account. Enjoy the investement experience on your Android and ios devices."
                   tryDemo=""
                   learnMore=""
                   googlePlay=""
                  appStore=""
    /> 
    <RightSection  imageUrl="/media/kiteconnect.png"
                       productName="console"
                  productDescription="build powerful trading platforms and experiences with our super simpleHTTP/JSON APIS.  if you a startup, build your investement app and showcase it to our clientbase."
                   learnMore=""/> 
     <LeftSection  imageUrl="/media/varsity.png"
                       productName="varsity mobile"
                  productDescription="An easy to grasp, collection of stock market lessons with in-depth<br/>coverage and illustrations. Content is broken down into down bite-size cards to help you learn on the go."
                   tryDemo=""
                   learnMore=""
                   googlePlay=""
                  appStore=""
    />
        <p className='text-center mt-5'>want to know more about our technology stack? Check out the zerodha. tech blog</p>
        <Universe/>
        </>
    );
}

export default ProductsPage;