import React, {memo} from 'react';
import './Success.scss';
import {CSSTransition} from 'react-transition-group';
import {useTypeSelector} from "../../../../../Core/hooks/useTypeSelector";
import {useAction} from "../../../../../Core/hooks/useAction";



const Success = () => {
    const {isSuccess} =useTypeSelector(state => state.cards)
const {setIsSuccess}=useAction()

    return (
        <CSSTransition
            in={isSuccess}
            timeout={500}
            classNames="success"
            unmountOnExit
            mountOnEnter>

            <div
                className="success"
                onClick={()=>{
                    setIsSuccess(false)
                }}
            >
                <h1>Success</h1>
                <p>You have successfully deleted the card</p>
            </div>
        </CSSTransition>

    );
}

export default memo(Success);
