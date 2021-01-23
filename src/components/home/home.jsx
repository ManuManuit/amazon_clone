import React from 'react'
import Product from '../product/product';
import './home.css';

function home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/30/prime/acquisition/2020/Q4/XCM_Manual_1279571_1432824_ES_GH20_ES_GW_DesktopHero_3483918_3000x1200_2X_es_ES._CB418016949_.jpg" alt="img-amazon"/>

        <div className="home__row">
            {/* Product id, title, price, rating, img */}
            <Product 
            id={123} 
            title="Aspirador iRobot" 
            price={250.96} 
            rating= {5} 
            image="https://m.media-amazon.com/images/I/61ylJUUFcoL._AC_SY400_.jpg"
            />

            <Product 
            id={1234} 
            title="Aspirador iRobot" 
            price={250.96} 
            rating= {5} 
            image="https://m.media-amazon.com/images/I/61ylJUUFcoL._AC_SY400_.jpg"
            />
        </div>

        <div className="home__row">
            {/* Product id, title, price, rating, img */}
            <Product 
            id={123} 
            title="Aspirador iRobot" 
            price={250.96} 
            rating= {5} 
            image="https://m.media-amazon.com/images/I/61ylJUUFcoL._AC_SY400_.jpg"
            />

            <Product 
            id={1234} 
            title="Aspirador iRobot" 
            price={250.96} 
            rating= {5} 
            image="https://m.media-amazon.com/images/I/61ylJUUFcoL._AC_SY400_.jpg"
            />

            <Product 
            id={1234} 
            title="Aspirador iRobot" 
            price={250.96} 
            rating= {5} 
            image="https://m.media-amazon.com/images/I/61ylJUUFcoL._AC_SY400_.jpg"
            />
        </div>

        </div>
    )
}

export default home
