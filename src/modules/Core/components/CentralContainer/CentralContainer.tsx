import './CentralContainer.scss';

import React from 'react';

/**
 * Общий компонент для отцентровки контента
 * @param children - Наполнение
 */
const CentralContainer: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div className="central-container">{children}</div>
);

export default React.memo(CentralContainer);
