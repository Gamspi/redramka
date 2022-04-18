import React from 'react';
import {createRoot} from 'react-dom/client';

import Core from './modules/Core/Core';

const root = createRoot(document.getElementById('root')!);
root.render(<Core />);
