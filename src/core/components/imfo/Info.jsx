import React from 'react';
import "./Info.scss"

const Info = ({country,established,head_quaters,logo,name,slogan,website}) => {
    return (
        <div className="info">
            <div className="info__body">
                <img src={logo} alt=""/>
                <h2>Name: {name}</h2>
                <p>Country: {country}</p>
                <p>Established: {established}</p>
                <p>Slogan: {slogan}</p>
                <p>Head quaters: {head_quaters}</p>
                <p>Website: <a href={website}>{website}</a></p>
            </div>
        </div>
    );
};

export default Info;
