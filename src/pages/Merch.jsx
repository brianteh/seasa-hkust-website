import React from 'react'
import '/src/pages/Merch.css' 

import merchImage from '/src/assets/merch/merch3.png'

const Merch = () => {
    return (
        <div className="merch-container" id="merch">
            <div className="merch-content">
                <div className="merch-image-container">
                    <img src={merchImage} alt="Merch" className="merch-image" />
                </div>
                <div className="info-column"></div>
                <div className="overlay">
                    <h2 className="mainheader">OUR NEW</h2>
                    <h2 className="subheader"><b>MERCH</b><br/>IS HERE!</h2>
                </div>
            </div>
        </div>
    );
};

export default Merch;