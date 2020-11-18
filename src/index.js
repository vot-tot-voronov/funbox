import React from 'react';
import ReactDOM from 'react-dom';

import CardsServices from './services';
import {CardsItemsProvider} from './components/card-service-context';

import './index.css';
import App from './components/app';

const cardsServices = new CardsServices();

ReactDOM.render(
  <React.StrictMode>
    <CardsItemsProvider value={cardsServices}>
      <App />
    </CardsItemsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
