import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './ResponsiveImage.scss';

const responsiveImage = (props) => {

    const { smallUrl, largeUrl, fallbackImageUrl, altText, caption } = props.image;

    return (

        <figure className="responsive-image">
            <picture className="responsive-image__container">
                <source media="(max-width: 767px)" className="js-small-image" srcSet={ smallUrl } />
                <source media="(min-width: 1320px)" className="js-large-image" srcSet={ largeUrl } />
                <img className="js-image-lazyload js-fallback-image" src={ fallbackImageUrl } alt={ altText } />
            </picture>
            <figcaption className="responsive-image__caption">
                <p className="responsive-image__description">{ ReactHtmlParser(caption.description) }</p>
            </figcaption>
        </figure>
    )
}

export default responsiveImage;