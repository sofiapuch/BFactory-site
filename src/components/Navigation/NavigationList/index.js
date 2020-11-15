import React from 'react';

import './NavigationList.scss';

const navigationList = (props) => {

    return (
        <ul className="navigation-list">
            { props.linksList.map( ( link, index ) => {
                return <li key={ index } className="navigation-list__item">{ link.label }</li>
            }) }
        </ul> 
    )
}

export default navigationList;