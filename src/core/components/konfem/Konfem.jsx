import React, {memo} from 'react';
import "./konfem.scss"
import {CSSTransition} from "react-transition-group";

const Konfem = ({setIsKonfem, handelDelete, isKonfem}) => {
    const handelSetCards = () => {
        handelDelete()
        setIsKonfem(false)
    }
    return (
        <CSSTransition
            in={isKonfem}
            timeout={500}
            classNames="konfem"
            unmountOnExit
            mountOnEnter
        >
            <div className="konfem">
                <div className="konfem__body">
                    <p>Вы уверенны, что хотите удалить карточку?</p>
                    <div className="konfem__buttons">
                        <button onClick={handelSetCards} disabled={!isKonfem}>да</button>
                        <button onClick={() => {
                            setIsKonfem(false)
                        } } disabled={!isKonfem}>нет</button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default memo(Konfem,(prevprops,nextprops)=>!prevprops.isKonfem!==nextprops.isKonfem);
