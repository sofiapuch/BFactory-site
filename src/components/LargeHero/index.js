import React from 'react';

const largeHero = (props) => {

    const { title, subtitle } = props.heroContent;

    return (
        <div className="largeHero">
            <h1 className="largeHero__title">{ title }</h1>
            <h2 className="largeHero__subtitle">{ subtitle }</h2>
        </div>
    )
}

export default largeHero;