import React from 'react';

import AppHero from '../components/home/Hero';
import AppAbout from '../components/home/About';
import AppFeature from '../components/home/Feature';

function AppHome() {
    return (
        <div className='main'>
            <AppHero />
            <AppAbout />
            <AppFeature />
        </div>    
    );
}

export default AppHome;
