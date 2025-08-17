import React from 'react'
import '/src/pages/Merch.css' 
import merchImage from '/src/assets/merch/merch3.png'

const Merch = () => {
    return (
        <div className="merch-container" id="merch">
            {/* Desktop and Tablet Layout */}
            <div className="merch-content desktop-tablet">
                <div className="merch-image-container">
                    <img src={merchImage} alt="Merch" className="merch-image" />
                </div>
                <div className="info-column"></div>
                <div className="overlay">
                    <h2 className="mainheader">OUR NEW</h2>
                    <h2 className="subheader"><b>MERCH</b><br/>IS HERE!</h2>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="merch-content mobile">
                <div className="mobile-overlay">
                    <h2 className="mobile-mainheader">OUR NEW</h2>
                    <h2 className="mobile-subheader"><b>MERCH</b><br/>IS HERE!</h2>
                </div>
                <div className="mobile-image-container">
                    <img src={merchImage} alt="Merch" className="mobile-merch-image" />
                </div>
            </div>
        </div>
    );
};

export default Merch;