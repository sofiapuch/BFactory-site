import React from 'react';

import './NavigationList.scss';

const navigationList = (props) => {

    const {linksList, slideIn } = props;

    return (
        <ul className={slideIn ? "navigation-list slide-in" : "navigation-list"}>
            { linksList.map( ( link, index ) => {
                return (
                    <li key={ index } className={ link.isActive ? "navigation-list__item is-active" : "navigation-list__item" }>
                        <a className="navigation-list__link" href="/">{ link.label }</a>
                    </li>
                )
            }) }
        </ul> 
    )
}

export default navigationList;