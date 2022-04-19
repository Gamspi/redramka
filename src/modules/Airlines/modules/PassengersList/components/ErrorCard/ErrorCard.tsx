import React from 'react';
import "./ErrorCard.scss"
import {useAction} from "../../../../../Core/hooks/useAction";
import {CSSTransition} from 'react-transition-group';
import {useTypeSelector} from "../../../../../Core/hooks/useTypeSelector";


const ErrorCard: React.FC = () => {
    const{isError}=useTypeSelector(state => state.cards)
    const {setIsError} = useAction()
    return (
        <CSSTransition in={isError} timeout={500} classNames="error-card" unmountOnExit mountOnEnter>

            <div className="error-card">
                <div className="error-card__body">
                    <h2 className="error-card__title">
                        Error
                    </h2>
                    <div className="error-card__title">
                        Some error has occurred
                    </div>
                    <button className="error-card__button" onClick={() => setIsError(false)}>
                        &#10008;
                    </button>
                </div>
            </div>
        </CSSTransition>

    );
};

export default React.memo(ErrorCard);
