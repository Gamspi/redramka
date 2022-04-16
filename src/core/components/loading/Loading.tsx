import React from 'react';
import "./loading.scss"
import {CSSTransition} from "react-transition-group";
interface props{
    isLoading:boolean
}
const Loading = ({isLoading}:props) =>(
        <CSSTransition
            in={isLoading}
            classNames="loading"
            timeout={1000}
            unmountOnExit
            mountOnEnter
        >
            <div className="loading">
                <div className="loading__body">
                    <p>Loading....</p>
                </div>
            </div>
        </CSSTransition>

    );


export default Loading;
