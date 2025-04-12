import React from 'react'
import '../pages/Merch.css' 

import merchImage from '../assets/merch/merch3.png'

const Merch = () => {
    return (
        <div className="merch-container" id ="merch">
            <div className="image-column">
                <img src={merchImage} alt="Merch" className="merch-image" />
            </div>
            <div className="info-column"></div>
            <div className="overlay">
                <h2 className="mainheader">OUR NEW</h2>
                <h2 className = "subheader"><b>MERCH</b><br/>IS HERE!</h2>
            </div>
        </div>
    );
};

export default Merch;