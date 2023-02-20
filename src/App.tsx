import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/home';
import Settings from 'pages/settings';
import Header from 'components/header';
import GlobalStyle from 'themes/global';
import dark from 'themes/dark';
import light from 'themes/light';
import { useStore } from 'store';


const App = () => {

  const theme = useStore((state) => state.theme);

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
