import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const AirLineList = React.lazy(() => import('../modules/AirLineList/AirLineList'));
const AirLineCard = React.lazy(() => import('../modules/AirLineCard/AirLineCard'));

/**
 * Слой роутинга для модуля авиалиний
 */
const AviaLineLayout: React.FC = () => (
  <Routes>
    <Route path="/">
      <Route
        index
        element={
          <Suspense fallback="">
            <AirLineList />
          </Suspense>
        }
      />
      <Route
        path="card/:id"
        element={
          <Suspense fallback="">
            <AirLineCard />
          </Suspense>
        }
      />
    </Route>
    {/* TODO Допилить страницу 404  */}
    <Route path="*" element={<div>NotFoundPage</div>} />
  </Routes>
);

export default React.memo(AviaLineLayout);
