import React from 'react';

const heading = (props) => {
    return(
        <div className="heading">
            <h1 className="heading__title">{ props.title }</h1>
            <p className="heading__subtitle">{ props.subtitle }</p>
        </div>
    )
}

export default heading;