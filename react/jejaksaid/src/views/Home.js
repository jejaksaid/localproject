import React from 'react';

import AppHero from '../components/home/Hero';
import AppAbout from '../components/home/About';

function AppHome() {
    return (
        <div className='main'>
            <AppHero />
            <AppAbout />
        </div>    
    );
}

export default AppHome;
