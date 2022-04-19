import './Footer.scss';

import React, {useEffect} from 'react';

import CentralContainer from '../CentralContainer/CentralContainer';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import useObserver from "../../hooks/useObserver";
import {useAction} from "../../hooks/useAction";

/**
 * Подвал
 */
const Footer: React.FC = () => {
    const {
        totalPassengers,
        cards,
        page,

    } = useTypeSelector(state => state.cards)
    const [ref, is] = useObserver();
    const {downloadCards} = useAction()


    useEffect(() => {
        if (is && totalPassengers > cards.length) {
            downloadCards(page)
        }
    }, [is]);
return(
    <footer className="footer" ref={ref}>
        <CentralContainer>@footer</CentralContainer>
    </footer>)
};

export default React.memo(Footer);
