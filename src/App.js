import React, { Component } from 'react';
import Layout from './components/Layout/index';
import LargeHero from './components/LargeHero/index';

import './App.scss';

import backgroundImage from './assets/cbfactory_background.jpg';

class App extends Component {

    state = {
        largeHero: {
            image: {
                smallUrl: backgroundImage,
                largeUrl: backgroundImage,
                fallbackImageUrl: backgroundImage,
                altText: "Background Image"
            },
            heading: {
                title: "Where it all begins",
                subtitle: "Coming to El Clot december 2020"
            },
            address: {
                street: "Passatge de Vintró, 3",
                postcode: "08026 Barcelona",
                transport: [
                    "Metro: L1 L2 Clot",
                    "Tram: Glories L1"
                ],
                phone: "+34 664 534 896"
            }
        }
    }

    render() {
        return (
            <Layout>
                <main className="main">
                    <LargeHero heroContent={this.state.largeHero}/>
                </main>
            </Layout>
        );
    }
}

export default App;