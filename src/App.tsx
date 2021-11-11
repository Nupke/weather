import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as DataProvider } from 'react-redux';
import ThemeConfig from 'theme';

import { store } from './store';
import { Main } from './pages/Main';

import './App.css';

const App: React.FC = () => {
  return (
    <DataProvider store={store}>
      <ThemeProvider theme={ThemeConfig}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/*" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </DataProvider>
  );
};

export default App;
