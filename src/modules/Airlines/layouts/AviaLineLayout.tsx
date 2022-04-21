import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from '../../Core/components/NotFoundPage/NotFoundPage';

const PassengersList = React.lazy(() => import('../modules/PassengersList/PassengersList'));
const AirLineCard = React.lazy(() => import('../modules/AirLineCard/AirLineCard'));

/**
 * Слой роутинга для модуля Airline
 */

const AviaLineLayout: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/redramka"
        element={
          <Suspense fallback="">
            <PassengersList />
          </Suspense>
        }
      >
        <Route
          path="card/:id"
          element={
            <Suspense fallback="">
              <AirLineCard />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default React.memo(AviaLineLayout);
