import React, { Component } from 'react';
import Layout from './components/Layout/index';
import LargeHero from './components/LargeHero/index';

import './App.scss';

import backgroundImage from './assets/cbfactory_background.jpg';

class App extends Component {

    state = {
        largeHero: {
            title: "Where it all begins",
            subtitle: "Coming to El Clot december 2020",
            image: {
                smallUrl: backgroundImage,
                largeUrl: backgroundImage,
                fallbackImageUrl: backgroundImage,
                altText: "Background Image"
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