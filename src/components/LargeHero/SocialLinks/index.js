import React from 'react';

import './SocialLinks.scss';

const socialLinks = (props) => {

    const { instagram, email } = props.social;

    return(
        <ul className="social-links">
            <li className="social-links__item">
                <a className="social-links__link social-links__link--instagram" href={ instagram } target="_blank" rel="noreferrer"><span className="screen-reader">Instagram</span></a>
            </li>
            <li className="social-links__item">
                <a className="social-links__link social-links__link--email" href={ email }><span className="screen-reader">Email</span></a>
            </li>
        </ul>
    )
}

export default socialLinks;