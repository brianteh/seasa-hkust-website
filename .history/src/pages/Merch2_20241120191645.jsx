import React from 'react';
import '../pages/Merch2.css'; 
import merchImage from '../assets/merch/merch2.png';

const Merch2 = () => {
    return (
        <div className="merch-container1">
            <div className="overlay1">
                <h1 className="overlay-title1">Varsity Jacket</h1>
                <p className="overlay-details1">Our official merchandise is on sale now.</p>
                <button className="order-button1">Order Now</button>
            </div>
            <div className="image-column1">
                <img src={merchImage} alt="Merch" className="merch-image1" />
            </div>
        </div>
    );
};

export default Merch2;