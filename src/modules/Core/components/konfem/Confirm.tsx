import React, {Dispatch, memo, SetStateAction} from 'react';
import './confirm.scss';
import {CSSTransition} from 'react-transition-group';

interface props {
  isConfirm: boolean;
  handelDelete: Function;
  setIsConfirm: Dispatch<SetStateAction<boolean>>;
}

const Confirm = ({isConfirm, handelDelete, setIsConfirm}: props) => {
  const handelSetCards = () => {
    handelDelete();
    setIsConfirm(false);
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

export default memo(Confirm, (prevProps, nextProps) => !prevProps.isConfirm !== nextProps.isConfirm);
