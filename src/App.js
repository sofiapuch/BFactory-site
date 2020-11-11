import React, { Component } from 'react';
import Layout from './components/Layout/index';
import LargeHero from './components/LargeHero/index';

import './App.css';

class App extends Component {

    state = {
        largeHero: {
            title: "Where it all begins",
            subtitle: "Coming to El Clot december 2020"
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