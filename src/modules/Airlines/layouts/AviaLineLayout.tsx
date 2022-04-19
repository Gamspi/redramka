import React, {Suspense} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import NotFoundPage from "../../Core/components/NotFoundPage/NotFoundPage";
import {CSSTransition, TransitionGroup} from 'react-transition-group';


const AirLineList = React.lazy(() => import('../modules/PassengersList/PassengersList'));
const AirLineCard = React.lazy(() => import('../modules/AirLineCard/AirLineCard'));
const Confirm = React.lazy(() => import('../../Core/components/konfem/Confirm'));

/**
 * Слой роутинга для модуля Airline
 */

const AviaLineLayout: React.FC = () => {
    const location = useLocation();

    return (

        <Routes>
            <Route path="/redramka"
                   element={
                       <Suspense fallback="">
                           <AirLineList/>
                       </Suspense>
                   }>

                <Route
                    path="card/:id"
                    element={
                        <Suspense fallback="">
                            <AirLineCard/>
                        </Suspense>
                    }
                >
                    <Route
                        path="confirm"
                        element={
                            <Suspense fallback="">
                                <Confirm/>
                            </Suspense>
                        }
                    />

                </Route>

                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
};

export default React.memo(AviaLineLayout);
