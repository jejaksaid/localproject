import React from 'react'
import '../../App.css';
import Helmet from 'react-helmet';

// export default function Products() {
//     return <h1 className='products'>Products</h1>
// }

function Products() {
    return(
        <>
            <Helmet>
                <title>SaidTravel | Products</title>
            </Helmet>
            <h1 className='products'>Products Page</h1>
        </>
    )
}

export default Products;