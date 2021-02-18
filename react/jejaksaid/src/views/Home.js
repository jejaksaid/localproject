import React from 'react';

import AppHero from '../components/home/Hero';
import AppAbout from '../components/home/About';
import AppFeature from '../components/home/Feature';
import AppWorks from '../components/home/Works';

function AppHome() {
    return (
        <div className='main'>
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWorks />
        </div>    
    );
}

export default AppHome;
