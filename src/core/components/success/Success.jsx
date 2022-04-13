import React from 'react';
import "./Success.scss"
import {CSSTransition} from "react-transition-group";

const Success = ({isSuccess}) => {
    return (
        <CSSTransition
            in={isSuccess}
            timeout={500}
            classNames="success"
            unmountOnExit
            mountOnEnter
        >
            <div className="success">
                <h1>
                    Успех
                </h1>
                <p>Вы успешно удалили карточку</p>
            </div>

        </CSSTransition>
    );
};

export default Success;
