import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from '../../Core/components/NotFoundPage/NotFoundPage';
import AirLineCard from '../modules/AirLineCard/AirLineCard';

const PassengersList = React.lazy(() => import('../modules/PassengersList/PassengersList'));


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
              <AirLineCard />
          }
        />

      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default React.memo(AviaLineLayout);
