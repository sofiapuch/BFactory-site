import React from 'react';
import Aux from '../../hoc/Aux';

// import Navigation from '../Navigation/index';
// import Footer from '../Footer/index';

const layout = ( props ) => {

    return (
        <Aux>
            {/* <Navigation /> */}
            <main className="layout">
                {props.children}
            </main>
            {/* <Footer /> */}
        </Aux>
    )
}

export default layout;