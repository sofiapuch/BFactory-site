import React, { Component } from 'react';
import Layout from './components/Layout/index';
import LargeHero from './components/LargeHero/index';

import './App.scss';

import backgroundImageSmall from './assets/background_image_small.jpg';
import backgroundImageLarge from './assets/background_image_large.jpg';

class App extends Component {

    state = {
        largeHero: {
            image: {
                smallUrl: backgroundImageSmall,
                largeUrl: backgroundImageLarge,
                fallbackImageUrl: backgroundImageLarge,
                altText: "Background Image",
                caption: {
                    description: "Photo by <a href='https://gverges.com/' target='blank' rel='noreferrer'>Guillem Vergés</a>"
                }
            },
            heading: {
                title: "Where it all begins",
                subtitle: "Coming to El Clot in december 2020"
            },
            address: {
                street: "Passatge de Vintró, 3",
                postcode: "08026 Barcelona",
                transport: [
                    "Metro: L1 L2 Clot",
                    "Tram: Glories L1"
                ],
                phone: "+34 664 534 896"
            },
            social: {
                instagram: "https://www.instagram.com/bfactory.crossfit/",
                email: "mailto:info@bfactorycrossfit.com"
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