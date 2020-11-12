import React from 'react';

import logo from '../../../assets/bfactory_logo.svg';

import './CompanyLogo.scss';

const companyLogo = () => {

    return (
        <div className="company-logo">
            <div className="company-logo__logo" style={{backgroundImage: "url('" + logo + "')"}}></div>
        </div>
    )
}

export default companyLogo;