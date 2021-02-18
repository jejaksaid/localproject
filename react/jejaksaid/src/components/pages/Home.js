import React from 'react';

import AppHero from '../home/Hero';
import AppAbout from '../home/About';
import AppFeature from '../home/Feature';
import AppWorks from '../home/Works';

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
