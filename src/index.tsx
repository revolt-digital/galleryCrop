import React from 'react';
import ReactDOM from 'react-dom/client';
import GalleryCrop from './galleryCrop';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// @todo: momentarily disabled because it affects the correct functioning of react-dnd
root.render(
  // <React.StrictMode>
    <GalleryCrop aspectRatio='1/1' onSelect={() => {}} deckid="1" cropShape="round" />
  // </React.StrictMode>
);
