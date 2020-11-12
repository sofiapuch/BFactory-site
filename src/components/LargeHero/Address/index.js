import React from 'react';

import pinSvg from '../../../assets/icons/pin.svg';
import phoneSvg from '../../../assets/icons/phone.svg';
import trainSvg from '../../../assets/icons/train.svg';

import './Address.scss';

const address = (props) => {

    const { street, postcode, transport, phone } = props.address;

    return (
        <div className="address">

            <div className="address__block">
                <div className="address__text-wrapper">
                    <div className="icon"><img src={ pinSvg } alt="icon" /></div>
                        <p className="address__text">{ street }<span className="address__text--mobile"> - { postcode }</span></p>
                </div>
                <p className="address__text address__text--desktop">{ postcode }</p>
            </div>

            <div className="address__block">
                <div className="address__text-wrapper">
                    <div className="icon"><img src={ trainSvg } alt="icon" /></div>
                    <p className="address__text">{ transport[0] } - { transport[1] }</p>
                </div>
                <div className="address__text-wrapper">
                    <div className="icon"><img src={ phoneSvg } alt="icon" /></div>
                    <p className="address__text">{ phone }</p>
                </div>
            </div>

        </div>
    )
}

export default address;