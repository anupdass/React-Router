import React from 'react';
import './Banner.css'

const Banner = ({bg, data, imgStatus}) => {
    return (
        <div className="banner">
            <img className="bannerImage" src={bg} alt=""/>
            <div className="bannerLogo" >
            {imgStatus ? <img className="bannerLogoImg" src={data} alt=""/>:<h1>{data}</h1>}
            </div>
        </div>
    );
};

export default Banner;