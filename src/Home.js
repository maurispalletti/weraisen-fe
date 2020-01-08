import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Fragment } from 'react';
import Card from './components/Card';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                <div className="bs-docs-section">
                    <div className="row">
                        <Card />
                    </div>
                </div>
                </div>
                {/* <Footer /> */}
            </Fragment>
        );
    }
}
export default Home;