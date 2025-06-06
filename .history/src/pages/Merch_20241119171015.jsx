import React from 'react'
import '../pages/Merch.css' 

import merchImage from '../assets/merch/merch3.png'

const Merch = () => {

    return (
        <div className="merch-container">
            <div className="image-column">
                <img src= {merchImage} alt="Merch" className="merch-image" />
            </div>
            <div className="info-column">
                <h2>Merch Title</h2>
                <p>Description of the merch goes here. You can add more details about the product.</p>
            </div>
        </div>
    );
};

export default Merch;