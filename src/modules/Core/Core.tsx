import './Core.scss';

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainLayout from './layouts/MainLayout';

/**
 * Ядро
 */
const Core: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="core">
        <Header />
        <div className="core__wrapper">
          <MainLayout />
        </div>
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>
);

export default React.memo(Core);
