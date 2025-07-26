import React from 'react';
import '/src/pages/Merch2.css'; 
import merchImage from '/src/assets/merch/merch2.png';

const Merch2 = () => {
    return (
        <div className="merch-container1" id="merch2">
            <div className="content-wrapper1">
                <div className="overlay1">
                    <h1 className="overlay-title1">Varsity Jacket</h1>
                    <p className="overlay-details1">Our official merchandise is now on sale.</p>
                    <a 
                        href="https://forms.gle/YtjjmgWmVbzdBqye6" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="button-link"
                    >
                        <button className="order-button1">Order Now</button>
                    </a>
                </div>
                <div className="image-column1">
                    <img src={merchImage} alt="Merch" className="merch-image1" />
                </div>
            </div>
        </div>
    );
};

export default Merch2;