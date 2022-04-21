import './Confirm.scss';

import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {useTypeSelector} from '../../../../../Core/hooks/useTypeSelector';
import {useAction} from '../../../../../Core/hooks/useAction';
import {useNavigate, useParams} from 'react-router-dom';

const Confirm: React.FC = () => {
  const {isConfirm, activeCard} = useTypeSelector((state) => state.cards);
  const {setIsConfirm, deleteCardFunction} = useAction();
  const {id} = useParams();
  const navigate = useNavigate();

  const handelSetCards = () => {
    deleteCardFunction(activeCard!._id);
    setIsConfirm(false);
    if (id) {
      navigate("/redramka");
    }
  };
  return (
    <CSSTransition in={isConfirm} timeout={500} classNames="confirm" unmountOnExit mountOnEnter>
      <div className="confirm">
        <div className="confirm__body">
          <p>Are you sure you want to delete the card?</p>
          <div className="confirm__buttons">
            <button onClick={handelSetCards} disabled={!isConfirm}>
              Yes
            </button>
            <button
              onClick={() => {
                setIsConfirm(false);
              }}
              disabled={!isConfirm}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default React.memo(Confirm);
