import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'uimini';

import { AppContext } from './app/contextProvider';
import App from 'app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContext>
      <Router>
        <App />
      </Router>
    </AppContext>
  </React.StrictMode>
);
