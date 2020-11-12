import React from 'react';

import './Heading.scss';

const heading = (props) => {

    const { title, subtitle } = props.headingText;

    return(
        <div className="heading">
            <h1 className="heading__title">{ title }</h1>
            <p className="heading__subtitle">{ subtitle }</p>
        </div>
    )
}

export default heading;