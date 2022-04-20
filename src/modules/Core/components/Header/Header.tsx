import './Header.scss';

import React from 'react';

import CentralContainer from '../CentralContainer/CentralContainer';
import {Link} from 'react-router-dom';

/**
 * Шапка
 */
const Header: React.FC = () => (
  <header className="header">
    <CentralContainer>
      <div className="header__logo">
        <Link to="/redramka">
          <h3>Airlines</h3>
        </Link>
      </div>
    </CentralContainer>
  </header>
);

export default React.memo(Header);
