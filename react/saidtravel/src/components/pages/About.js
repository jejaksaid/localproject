import React from 'react'
import '../../App.css';
import Helmet from 'react-helmet';

// export default function Products() {
//     return <h1 className='products'>Products</h1>
// }

function About() {
    return(
        <>
            <Helmet>
                <title>SaidTravel | About</title>
            </Helmet>
            <h1 className='about'>About Page</h1>
        </>
    )
}

export default About;