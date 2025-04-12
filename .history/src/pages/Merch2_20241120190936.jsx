import React from 'react';
import '../pages/Merch.css'; 
import merchImage from '../assets/merch/merch2.png';

const Merch2 = () => {
    return (
        <div className="merch-container1">
            <div className="info-column1">
            </div>

            <div className="image-column1">
                <img src={merchImage} alt="Merch" className="merch-image1" />
                <div className="overlay">
                    <h1 className="overlay-title1">Varsity Jacket</h1>
                    <p className="overlay-details1">Our official merchandise is on sale now.</p>
                    <button className="order-button1">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Merch2;