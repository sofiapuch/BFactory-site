import React from 'react';
import ResponsiveImage from '../ResponsiveImage/index';

import './LargeHero.scss';

const largeHero = (props) => {

    const { title, subtitle, image } = props.heroContent;

    return (
        <div className="large-hero">
            <div className="large-hero__background-image">
                <ResponsiveImage image={ image }/>
            </div>
            <div className="grid-container">
                <div className="large-hero__inner grid-x">
                    <div className="cell medium-8 medium-offset-2">
                        <h1 className="large-hero__title">{ title }</h1>
                        <p className="large-hero__subtitle">{ subtitle }</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default largeHero;