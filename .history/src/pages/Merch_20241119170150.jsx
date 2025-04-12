import React from 'react';
import './Merch.css'; // Import the CSS file

const Merch = () => {
    return (
        <div className="merch-container">
            <div className="image-column">
                <img src="merch3.png" alt="Merch" className="merch-image" />
            </div>
            <div className="info-column">
                <h2>Merch Title</h2>
                <p>Description of the merch goes here. You can add more details about the product.</p>
            </div>
        </div>
    );
};

export default Merch;