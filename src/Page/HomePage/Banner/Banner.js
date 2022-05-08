import React from 'react';
import video from '../../../Images/Bazar.mp4';


const Banner = () => {
    return (
        <div>
            {/* <img className="w-100" style={{ height: '6 00px' }} src={img} alt="" /> */}
            < video
                loop='true' autoPlay='autoplay' muted >
                <source src={video} type='video/mp4' />
            </video >

        </div >
    );
};

export default Banner;