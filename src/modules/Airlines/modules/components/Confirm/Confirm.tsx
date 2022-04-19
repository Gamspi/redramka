import React, {useEffect} from 'react';
import './Confirm.scss';
import {CSSTransition} from 'react-transition-group';
import {useTypeSelector} from "../../../../Core/hooks/useTypeSelector";
import {useAction} from "../../../../Core/hooks/useAction";
import {useNavigate, useParams} from "react-router-dom";
import useTheme from "../../../../Core/hooks/useTheme";


const Confirm:React.FC = () => {
  const{isConfirm,activeCardId}=useTypeSelector(state => state.cards)
  const{setIsConfirm,deleteCardFunction}=useAction()
  const {id} = useParams()
  const navigate = useNavigate()
  const [setTheme] = useTheme('fixed');
  useEffect(() => {
    isConfirm ? setTheme('true') : setTheme('');
  }, [isConfirm]);
  const handelSetCards = () => {


    deleteCardFunction(activeCardId)
    setIsConfirm(false);
    if(id){
      navigate(-1)
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
