import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Core from './core/Core';


const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
root.render(<Core />);
