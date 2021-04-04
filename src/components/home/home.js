import React from 'react';
import Header from '../header/header';
import MainFrontPage from '../mainFrontPage/mainFrontPage';
import Footer from '../footer/footer';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <MainFrontPage />
            <Footer />
        </React.Fragment>
    )
};

export default Home;