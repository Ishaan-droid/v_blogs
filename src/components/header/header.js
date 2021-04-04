import React from 'react';
import Card1 from '../../images/header/Card1.jpeg';
import Card2 from '../../images/header/Card2.jpeg';
import Card3 from '../../images/header/Card3.jpeg';
import './header.css';

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 imageStyle">
                    <img src={Card1} className="d-block w-100 responsive card1Style" alt="Card1" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 imageStyle">
                    <img src={Card2} className="d-block w-100 responsive card2Style" alt="Card2" />
                    <h1>My Life. My Blog.</h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 imageStyle">
                    <img src={Card3} className="d-block w-100 responsive card3Style" alt="Card3" />
                </div>
            </div>
        </div>
    );
};

export default Header;