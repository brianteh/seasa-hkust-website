import React from 'react';
import '../pages/Merch.css'; 
import merchImage1 from '../assets/merch/merch2.png';

const Merch2 = () => {
    return (
        <div className="merch-container1">
            <div className="info-column1">
                <h2>Merch Title</h2>
                <p>Description of the merch goes here. You can add more details about the product.</p>
            </div>

            <div className="image-column1">
                <img src={merchImage} alt="Merch" className="merch-image1" />
            </div>
        </div>
    );
};

export default Merch2;