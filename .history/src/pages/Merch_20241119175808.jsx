import React from 'react'
import '../pages/Merch.css' 
import Merch2 from '../pages/Merch2' 

import merchImage from '../assets/merch/merch3.png'

const Merch = () => {
    return (
        <div className="merch-container" id ="merch">
            <div className ="uppercol">
                <div className="image-column">
                    <img src={merchImage} alt="Merch" className="merch-image" />
                </div>
                <div className="info-column"></div>
                <div className="overlay">
                    <h2 className="mainheader">OUR NEW</h2>
                    <h2 className = "subheader"><b>MERCH</b><br/>IS HERE!</h2>
                </div>

            </div>            
            <Merch2 />
        </div>
        
    );
};

export default Merch;