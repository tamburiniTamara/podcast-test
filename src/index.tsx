import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PodcastsDataProvider } from './contexts/podcastsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PodcastsDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PodcastsDataProvider>
  </React.StrictMode>
);
