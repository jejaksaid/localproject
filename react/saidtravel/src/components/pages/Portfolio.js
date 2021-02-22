import React from 'react';
import '../../App.css';
import Helmet from 'react-helmet';
 
// export default function Services() {
//     return <h1 className='services'>Services</h1>
// }

function Services() {
    return(
        <>
            <Helmet>
                <title>SaidTravel | Portfolio</title>
            </Helmet>
                <h1 className='services'>Portfolio</h1>
        </>
    )
}

export default Services;