import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

import { Header } from './components/Header';
import { AssetsPage } from './pages/AssetsPage';

import './App.css';

const fontTheme = createTheme({
  typography: {
    'fontFamily': 'Source Sans Pro'
  }
})

function App() {
  return (
    <ThemeProvider theme={fontTheme}>
      <div>
        <Header />
        <div className='container'>
          <AssetsPage />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
