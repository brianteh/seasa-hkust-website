import React from 'react'


import merchImage from '../assets/merch/merch2.png'

const Merch2 = () => {
    return (
        <div className="merch-container1">
            
            <div className="info-column"></div>

            <div className="image-column">
                <img src={merchImage} alt="Merch" className="merch-image" />
            </div>



        </div>
    );
};

export default Merch2;