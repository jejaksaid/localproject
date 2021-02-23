import React from 'react';
import '../../App.css';
import { Helmet } from 'react-helmet';

function Articles() {
    return (
        <> 
            <Helmet>
                <title>JejakSaid | Article</title>
            </Helmet>
            <h1 className='articles'>Articles Page</h1>
        </>
    )
}

export default Articles
