import React from 'react';

import logo from '../../../assets/bfactory_logo.svg';

import './CompanyLogo.scss';

const companyLogo = () => {
    return (
        <div className="company-logo">
            <div className="icon"><img src={ logo } alt="icon" /></div>
            <p className="company-logo__label">Crossfit</p>
        </div>
    )
}

export default companyLogo;