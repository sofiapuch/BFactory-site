import React from 'react';
import ResponsiveImage from '../ResponsiveImage/index';

const largeHero = (props) => {

    const { title, subtitle, image } = props.heroContent;

    return (
        <div className="largeHero">
            <div className="largeHero__background-image">
                <ResponsiveImage image={ image }/>
            </div>
            <div className="grid-container">
                <div className="largeHero__inner grid-x">
                    <div className="cell medium-8">
                        <h1 className="largeHero__title">{ title }</h1>
                        <p className="largeHero__subtitle">{ subtitle }</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default largeHero;