import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const Airlines = React.lazy(() => import('../../Airlines/Airlines'));

/**
 * Основной слой рутинга
 */
const MainLayout: React.FC = () => (
  <Routes>
    <Route
      path="/*"
      element={
        <Suspense fallback="">
          <Airlines />
        </Suspense>
      }
    />
    {/* TODO Допилить страницу 404  */}
    <Route path="*" element={<div>NotFoundPage</div>} />
  </Routes>
);

export default React.memo(MainLayout);
