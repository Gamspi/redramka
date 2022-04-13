import React from 'react';
import "./Info.scss"
import {CSSTransition} from "react-transition-group";

const Info = ({
                  country, established,
                  head_quaters,
                  logo,
                  name,
                  slogan,
                  website,
                  isInfo,
                  setIsKonfem
              }) => {
    return (
        <CSSTransition
            in={isInfo}
            timeout={1000}
            classNames="info"
            unmountOnExit
            mountOnEnter
        >
            <div className="info">
                <div className="info__body">
                    <img src={logo} alt={name}/>
                    <h2>Name: {name}</h2>
                    <p>Country: {country}</p>
                    <p>Established: {established}</p>
                    <p>Slogan: {slogan}</p>
                    <p>Head quaters: {head_quaters}</p>
                    <p>Website: <a href={website}>{website}</a></p>
                    <button onClick={()=>setIsKonfem(true)}>Удалить</button>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Info;
