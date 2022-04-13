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
                  setIsInfo,
    setIsKonfem
              }) => {
    const handlerClose = (event) => {
      if (event.target.classList.contains("info__button-close")||!event.target.closest(".info__body")){
          setIsInfo(false)

      }else if (event.target.classList.contains("info__button")){
          setIsKonfem(true)
      }


    }

    return (
        <CSSTransition
            in={isInfo}
            timeout={1000}
            classNames="info"
            unmountOnExit
            mountOnEnter
        >
            <div className="info" onClick={(event)=>handlerClose(event)}>
                <div className="info__body">
                    <img src={logo} alt={name}/>
                    <h2>Name: {name}</h2>
                    <p>Country: {country}</p>
                    <p>Established: {established}</p>
                    <p>Slogan: {slogan}</p>
                    <p>Head quaters: {head_quaters}</p>
                    <p>Website: <a href={website}>{website}</a></p>
                    <button className="info__button" >Удалить</button>
                    <button className="info__button-close" >X</button>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Info;
