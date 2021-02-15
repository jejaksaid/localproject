import React from 'react';
import '../../App.css';
import Helmet from 'react-helmet';

// export default function SignUp() {
//     return <h1 className="sign-up">Sign Up</h1>
// }

function SignUp() {
    return(
        <>
            <Helmet>
                <title>SaidTravel | Sign Up</title>
            </Helmet>
            <h1 className="sign-up">Sign Up Page</h1>
        </>
    )
}

export default SignUp;