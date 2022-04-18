import './Header.scss';

import React from 'react';

import CentralContainer from '../CentralContainer/CentralContainer';

/**
 * Шапка
 */
const Header: React.FC = () => (
  <header className="header">
    <CentralContainer>
      <div className="header__logo">
        <h3>Airlines</h3>
      </div>
    </CentralContainer>
  </header>
);

export default React.memo(Header);
