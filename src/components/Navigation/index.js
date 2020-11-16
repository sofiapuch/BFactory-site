import React, { Component } from 'react';
import NavigationList from './NavigationList/index';

import './Navigation.scss';

class Navigation extends Component {

    state = {
        linkList: [
            { label: 'About', isActive: true },
            { label: 'Classes', isActive: false },
            { label: 'Getting Started', isActive: false },
            { label: 'Membership', isActive: false },
            { label: 'Horarios', isActive: false },
            { label: 'Buffalo Athlete', isActive: false },
            { label: 'Blog', isActive: false }
        ],
        mobileMenuIsVisible: false
    }

    burgerButtonClickHandler = () => {
        const mobileMenuIsVisible = !this.state.mobileMenuIsVisible;
        this.setState({ mobileMenuIsVisible: mobileMenuIsVisible });
    }

    render () {
        return (
            <header className="navigation">
                <div className="navigation__logo">
                    Logo
                </div>
                <div className="navigation__burger-button" onClick={this.burgerButtonClickHandler}>X</div>
                <nav className="navigation__main">
                    <NavigationList 
                        linksList={ this.state.linkList }
                        slideIn={ this.state.mobileMenuIsVisible } />
                </nav>
            </header>
        )
    }
}

export default Navigation;