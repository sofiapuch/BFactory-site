import React from 'react';
import ResponsiveImage from '../ResponsiveImage/index';
import CompanyLogo from './CompanyLogo/index';
import Heading from './Heading/index';
import Address from './Address/index';
import SocialLinks from './SocialLinks/index';

import './LargeHero.scss';

const largeHero = (props) => {

    const { heading, image, address, social } = props.heroContent;

    return (
        <div className="large-hero">
            <div className="large-hero__background-image">
                <ResponsiveImage image={ image }/>
            </div>
            <div className="grid-container">
                <div className="large-hero__inner grid-x">
                    <div className="cell medium-8 medium-offset-2">
                        <CompanyLogo />
                        <Heading headingText={ heading } />
                        <SocialLinks social={ social } />
                        <Address address={ address } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default largeHero;