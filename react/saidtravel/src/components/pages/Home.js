import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import { Helmet } from 'react-helmet';



function Home() {
    return (
        <>
            <Helmet>
                <title>Jejak Said</title>
                <meta name="description" content="This is home description page" />
            </Helmet>
            {/* <HeroSection /> */}
            <Cards />

        </>
    )
}

export default Home;
