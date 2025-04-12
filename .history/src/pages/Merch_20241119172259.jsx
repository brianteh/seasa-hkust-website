import React from 'react'
import '../pages/Merch.css' 

import merchImage from '../assets/merch/merch3.png'

const Merch = () => {
    return (
        <div className="merch-container">
            <div className="image-column">
                <img src={merchImage} alt="Merch" className="merch-image" />
            </div>
            <div className="info-column"></div>
            <div className="overlay">
                <h2>OUR</h2>
                <h2>NEW MERCH<br>IS HERE!</h2>
            </div>
        </div>
    );
};

export default Merch;