import './Footer.scss';

import React from 'react';

import CentralContainer from '../CentralContainer/CentralContainer';

/**
 * Подвал
 */
const Footer: React.FC = () => (
  <footer className="footer">
    <CentralContainer>@footer</CentralContainer>
  </footer>
);

export default React.memo(Footer);
