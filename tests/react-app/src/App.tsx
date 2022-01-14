import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleTagManager } from '@builder.io/partytown/react';
import { FacebookPixel } from '@builder.io/partytown/react';

function App() {
  return (
    <div className="App">
      <GoogleTagManager containerId={'GTM-N3WSTXZ'} enablePartytown={false} />
      <FacebookPixel pixelId={'XXX'} enablePartytown={false} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
