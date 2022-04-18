import './Airlines.scss';

import React from 'react';

import AviaLineLayout from './layouts/AviaLineLayout';

/**
 * Входная точка модуля Airlines
 */
const Airlines: React.FC = () => <AviaLineLayout />;

export default React.memo(Airlines);
