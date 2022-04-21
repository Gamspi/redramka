import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

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
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default React.memo(MainLayout);
