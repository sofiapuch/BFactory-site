import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './ResponsiveImage.scss';

const responsiveImage = (props) => {

    const { smallUrl, largeUrl, fallbackImageUrl, altText, caption } = props.image;

    return (

        <figure className="responsive-image">
            <picture className="responsive-image__container">
                <source media="(max-width: 799px)" srcSet={ smallUrl } />
                <source media="(min-width: 800px)" srcSet={ largeUrl } />
                <img src={ fallbackImageUrl } alt={ altText } />
            </picture>
            <figcaption className="responsive-image__caption">
                <p className="responsive-image__description">{ ReactHtmlParser(caption.description) }</p>
            </figcaption>
        </figure>
    )
}

export default responsiveImage;