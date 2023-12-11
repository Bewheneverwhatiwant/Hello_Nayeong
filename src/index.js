import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from "./router"
import { RouterProvider } from 'react-router-dom';
import ResetCss from './ResetCss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><ResetCss /><RouterProvider router={router} /></>);